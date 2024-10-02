// import { generateReactHelpers } from '@uploadthing/react/hooks'

// import type { OurFileRouter } from '@/app/api/uploadthing/core'

// export const { uploadFiles } = generateReactHelpers<OurFileRouter>()


// src/lib/uploadthing.ts
import { generateReactHelpers } from '@uploadthing/react'; // Adjust this based on the exports
import type { OurFileRouter } from '@/app/api/uploadthing/core';

export const { uploadFiles } = generateReactHelpers<OurFileRouter>();
