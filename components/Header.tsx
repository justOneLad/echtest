"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Twitter, Book, ExternalLink } from "lucide-react"

export function Header() {
  const [echoPrice, setEchoPrice] = useState<string | null>(null)
  const [hbarPrice, setHbarPrice] = useState<string | null>(null)
  const [saucePrice, setSaucePrice] = useState<string | null>(null)
  const [packPrice, setPackPrice] = useState<string | null>(null)
  const [showPopup, setShowPopup] = useState(false)
  const router = useRouter()
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function fetchPrices() {
      try {
        const tokens = ["ECHO", "HBAR", "SAUCE", "PACK"]
        const prices = await Promise.all(
          tokens.map(async (token) => {
            const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${token}`)
            const data = await response.json()
            return data.pairs && data.pairs.length > 0 ? data.pairs[0].priceUsd : null
          }),
        )
        setEchoPrice(prices[0])
        setHbarPrice(prices[1])
        setSaucePrice(prices[2])
        setPackPrice(prices[3])
      } catch (error) {
        console.error("Error fetching prices:", error)
      }
    }

    fetchPrices()
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowPopup(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleListingClick = (path: string) => {
    setShowPopup(false)
    router.push(path)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-2 sm:px-4">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Image
              src="https://github.com/HederaEcho/resources/blob/main/echo-logo.png?raw=true"
              alt="ECHO Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-sm sm:text-base">Hedera EchoSystem</span>
          </Link>
          {echoPrice && (
            <div className="hidden items-center space-x-2 sm:flex">
              <span className="text-sm font-medium">ECHO:</span>
              <span className="text-sm font-bold text-green-400">${Number(echoPrice).toFixed(4)}</span>
            </div>
          )}
          {hbarPrice && (
            <div className="hidden items-center space-x-2 sm:flex ml-4">
              <span className="text-sm font-medium">HBAR:</span>
              <span className="text-sm font-bold text-green-400">${Number(hbarPrice).toFixed(4)}</span>
            </div>
          )}
          {saucePrice && (
            <div className="hidden items-center space-x-2 sm:flex ml-4">
              <span className="text-sm font-medium">SAUCE:</span>
              <span className="text-sm font-bold text-green-400">${Number(saucePrice).toFixed(4)}</span>
            </div>
          )}
          {packPrice && (
            <div className="hidden items-center space-x-2 sm:flex ml-4">
              <span className="text-sm font-medium">PACK:</span>
              <span className="text-sm font-bold text-green-400">${Number(packPrice).toFixed(4)}</span>
            </div>
          )}
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="https://twitter.com/HederaEcho"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://docs.testecho.io"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              <Book className="h-5 w-5" />
              <span className="sr-only">Documentation</span>
            </Link>
          </nav>
          <div className="relative">
            <Button variant="outline" className="ml-auto" onClick={() => setShowPopup(!showPopup)}>
              Get Listed
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            {showPopup && (
              <div
                ref={popupRef}
                className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <button
                    onClick={() => handleListingClick("/memecoin-listing")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                    role="menuitem"
                  >
                    Memecoin Listing
                  </button>
                  <button
                    onClick={() => handleListingClick("/project-listing")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                    role="menuitem"
                  >
                    Project Listing
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

