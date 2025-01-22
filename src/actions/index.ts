import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  booster: defineAction({
    accept: "form",
    input: z.object({
      fullName: z.string().min(4, {
        message: "Full name must be more than of 3 characters",
      }),
      companyName: z.string().min(4, {
        message: "Company name must be more than of 3 characters",
      }),
      email: z.string().email(),
      phone: z.string().min(11, {
        message: "Phone number must be minimum of 11 characters",
      }),
      location: z.string().min(4, {
        message: "Location must be more than of 3 characters",
      }),
      position: z.string().min(4, {
        message: "Position must be more than of 3 characters",
      }),
      jobDescription: z.string().min(11, {
        message: "Job Description must be more than of 10 characters",
      }),
    }),
    handler: async (input) => {
      // "https://script.google.com/macros/s/AKfycbzX66of_LzOBwqZKGcTan1lrzWZ_OHdnPB-5kslkv6MSX2xPyyNpxR5Rl-8fC9o0soE/exec";
      return input;
    },
  }),
  standard: defineAction({
    accept: "form",
    input: z.object({
      fullName: z.string().min(4, {
        message: "Full name must be more than of 3 characters",
      }),
      companyName: z.string().min(4, {
        message: "Company name must be more than of 3 characters",
      }),
      email: z.string().email(),
      phone: z.string().min(11, {
        message: "Phone number must be minimum of 11 characters",
      }),
      location: z.string().min(4, {
        message: "Location must be more than of 3 characters",
      }),
      position: z.string().min(4, {
        message: "Position must be more than of 3 characters",
      }),
      preferredDate: z.string(),
      preferredTime: z.string(),
    }),
    handler: async (input) => {
      input["package"] = "standard";

      console.log("Input:", input);

      const keyValuePairs = [];
      for (let key in input) {
        keyValuePairs.push(key + "=" + input[key]);
      }

      const formDataString = keyValuePairs.join("&");
      const url =
        "https://script.google.com/macros/s/AKfycbz00gpwmhgdv3PhNmJl4wRls2f3ztD8IuLFPlzIy8Kykl5rcG9xC26L0uE20qm-1hdo/exec?sheet=Premium";

      try {
        const response = await fetch(url, {
          redirect: "follow",
          method: "POST",
          body: formDataString,
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        });
        return { data: response.ok };
      } catch (error) {
        return { error };
      }
    },
  }),
};
