"use server"

import fs from "fs/promises"
import path from "path"

const memecoinFilePath = path.join(process.cwd(), "data", "memecoin-listings.json")
const projectFilePath = path.join(process.cwd(), "data", "project-listings.json")

export async function submitMemecoinProject(data: any) {
  try {
    let projects = []
    try {
      const fileContent = await fs.readFile(memecoinFilePath, "utf-8")
      projects = JSON.parse(fileContent)
    } catch (error) {
      // File doesn't exist or is empty, start with an empty array
    }

    projects.push({ ...data, id: Date.now().toString(), submittedAt: new Date().toISOString() })
    await fs.writeFile(memecoinFilePath, JSON.stringify(projects, null, 2))
  } catch (error) {
    console.error("Error saving memecoin listing:", error)
    throw new Error("Failed to save memecoin listing")
  }
}

export async function submitProject(data: any) {
  try {
    let projects = []
    try {
      const fileContent = await fs.readFile(projectFilePath, "utf-8")
      projects = JSON.parse(fileContent)
    } catch (error) {
      // File doesn't exist or is empty, start with an empty array
    }

    projects.push({ ...data, id: Date.now().toString(), submittedAt: new Date().toISOString() })
    await fs.writeFile(projectFilePath, JSON.stringify(projects, null, 2))
  } catch (error) {
    console.error("Error saving project listing:", error)
    throw new Error("Failed to save project listing")
  }
}

