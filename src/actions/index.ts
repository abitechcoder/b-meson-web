import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  booster: defineAction({
    accept: "form",
    input: z.object({
      fullName: z.string().min(2, {
        message: "Full name must be minimum of two (2) characters",
      }),
      companyName: z.string().min(2, {
        message: "Company name must be minimum of two (2) characters",
      }),
      email: z.string().email(),
      phone: z.string().min(11, {
        message: "Phone number must be less than 11 characters",
      }),
      location: z.string().min(2, {
        message: "Location must be minimum of two (2) characters",
      }),
      position: z.string().min(2, {
        message: "Position must be minimum of two (2) characters",
      }),
      jobDescription: z.string().min(2, {
        message: "Job Description must be minimum of two (2) characters",
      }),
    }),
    handler: async (input) => {
      // "https://script.google.com/macros/s/AKfycbzX66of_LzOBwqZKGcTan1lrzWZ_OHdnPB-5kslkv6MSX2xPyyNpxR5Rl-8fC9o0soE/exec";
      return input;
    },
  }),
};
