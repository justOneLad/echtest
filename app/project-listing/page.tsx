"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { submitProject } from "@/app/actions"

export default function ProjectListingPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    projectName: "",
    category: "",
    description: "",
    website: "",
    telegram: "",
    twitter: "",
    github: "",
    logoLink: "",
    whitepaper: "",
    hasToken: "",
    tokenId: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRadioChange = (value: string) => {
    setFormData({ ...formData, hasToken: value, tokenId: value === "no" ? "" : formData.tokenId })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await submitProject(formData)
      alert("Project submitted successfully!")
      router.push("/")
    } catch (error) {
      console.error("Error submitting project:", error)
      alert("Error submitting project. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Project Listing Submission</CardTitle>
            <CardDescription>Submit your project for listing</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="projectName">Project Name</Label>
                <Input
                  type="text"
                  id="projectName"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="category">Project Category</Label>
                <Input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Project Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="website">Website</Label>
                <Input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="telegram">Telegram</Label>
                <Input type="url" id="telegram" name="telegram" value={formData.telegram} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="twitter">Twitter</Label>
                <Input type="url" id="twitter" name="twitter" value={formData.twitter} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="github">GitHub</Label>
                <Input type="url" id="github" name="github" value={formData.github} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="logoLink">Logo Link</Label>
                <Input
                  type="url"
                  id="logoLink"
                  name="logoLink"
                  value={formData.logoLink}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="whitepaper">Whitepaper Link</Label>
                <Input
                  type="url"
                  id="whitepaper"
                  name="whitepaper"
                  value={formData.whitepaper}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label>Does your project have a token?</Label>
                <RadioGroup
                  name="hasToken"
                  value={formData.hasToken}
                  onValueChange={handleRadioChange}
                  className="flex flex-col space-y-1 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="hasToken-yes" />
                    <Label htmlFor="hasToken-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="hasToken-no" />
                    <Label htmlFor="hasToken-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
              {formData.hasToken === "yes" && (
                <div>
                  <Label htmlFor="tokenId">Token ID</Label>
                  <Input
                    type="text"
                    id="tokenId"
                    name="tokenId"
                    value={formData.tokenId}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
              <Button type="submit">Submit Project</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

