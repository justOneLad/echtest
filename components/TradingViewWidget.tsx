import React, { useEffect, useRef } from "react"

interface TradingViewWidgetProps {
  symbol: string
}

let tvScriptLoadingPromise: Promise<void>

export default function TradingViewWidget({ symbol }: TradingViewWidgetProps) {
  const onLoadScriptRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    onLoadScriptRef.current = createWidget

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script")
        script.id = "tradingview-widget-loading-script"
        script.src = "https://s3.tradingview.com/tv.js"
        script.type = "text/javascript"
        script.onload = resolve as any

        document.head.appendChild(script)
      })
    }

    tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current())

    return () => {
      onLoadScriptRef.current = null
    }

    function createWidget() {
      if (document.getElementById("tradingview_chart") && "TradingView" in window) {
        ;new (window as any).TradingView.widget({
          autosize: true,
          symbol: symbol,
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_chart",
        })
      }
    }
  }, [symbol])

  return (
    <div className="tradingview-widget-container" style={{ height: "100%", width: "100%" }}>
      <div id="tradingview_chart" style={{ height: "calc(100% - 32px)", width: "100%" }} />
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noreferrer noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  )
}

