// this file make connexion our front-end to sanity database

import {
    createCurrentUserHook,
    createClient
} from "next-sanity"

import imageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2022-08-06",
    useCdn: process.env.NODE_ENV === "production"
}

// Set up the client for fetching fata in the getProps page functions
export const sanityClient = createClient(config)

// Set up a function for generationg Image URL
export const urlFor = (source) => imageUrlBuilder(config).image(source)

// Function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)