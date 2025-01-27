import '@astrojs/internal-helpers/path';
import { g as getActionQueryString } from './shared_ByP7ZIvF.mjs';
import 'es-module-lexer';
import 'kleur/colors';
import './astro/server_kT4hzO47.mjs';
import 'clsx';
import 'cookie';
import 'html-escaper';
import * as z from 'zod';
import { d as defineAction } from './server_BPEEI8OM.mjs';

const ENCODED_DOT = "%2E";
function toActionProxy(actionCallback = {}, aggregatedPath = "") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (objKey in target || typeof objKey === "symbol") {
        return target[objKey];
      }
      const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll(".", ENCODED_DOT);
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function() {
          const searchParams = new URLSearchParams(action.toString());
          return {
            method: "POST",
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: "_astroAction",
            action: "?" + searchParams.toString()
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        }
      });
      return toActionProxy(action, path + ".");
    }
  });
}
async function handleAction(param, path, context) {
  {
    const { getAction } = await import('./server_BPEEI8OM.mjs').then(n => n.b);
    const action = await getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
}
toActionProxy();

const webAppUrl = "https://script.google.com/macros/s/AKfycbx5Xdrw0m97On2oI4Su3QEcWdhIn6bGKW7WEr4F2YEUhuGAUH-2-pNBE_67KPB0hu569Q/exec";
const server = {
  booster: defineAction({
    accept: "form",
    input: z.object({
      fullName: z.string().min(4, {
        message: "Full name must be more than of 3 characters"
      }),
      companyName: z.string().min(4, {
        message: "Company name must be more than of 3 characters"
      }),
      email: z.string().email(),
      phone: z.string().min(11, {
        message: "Phone number must be minimum of 11 characters"
      }),
      location: z.string().min(4, {
        message: "Location must be more than of 3 characters"
      }),
      position: z.string().min(4, {
        message: "Position must be more than of 3 characters"
      }),
      jobDescription: z.string().min(11, {
        message: "Job Description must be more than of 10 characters"
      })
    }),
    handler: async (input) => {
      return input;
    }
  }),
  premium: defineAction({
    accept: "form",
    input: z.object({
      fullName: z.string().min(4, {
        message: "Full name must be more than of 3 characters"
      }),
      companyName: z.string().min(4, {
        message: "Company name must be more than of 3 characters"
      }),
      email: z.string().email(),
      phone: z.string().min(11, {
        message: "Phone number must be minimum of 11 characters"
      }),
      location: z.string().min(4, {
        message: "Location must be more than of 3 characters"
      }),
      position: z.string().min(4, {
        message: "Position must be more than of 3 characters"
      }),
      preferredDate: z.string(),
      preferredTime: z.string(),
      package: z.string()
    }),
    handler: async (input) => {
      const data = JSON.stringify(input);
      const url = `${webAppUrl}?sheet=Premium`;
      try {
        const response = await fetch(url, {
          redirect: "follow",
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          }
        });
        return { data: response.ok };
      } catch (error) {
        console.error("Premium Error:", error);
        return { error };
      }
    }
  }),
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(4, {
        message: "Name must be more than of 3 characters"
      }),
      email: z.string().email(),
      phone: z.string().min(11, {
        message: "Phone number must be minimum of 11 characters"
      }),
      message: z.string()
    }),
    handler: async (input) => {
      const data = JSON.stringify(input);
      const url = `${webAppUrl}?sheet=ContactUs`;
      try {
        const response = await fetch(url, {
          redirect: "follow",
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          }
        });
        return { data: response.ok };
      } catch (error) {
        console.error("Premium Error:", error);
        return { error };
      }
    }
  })
};

export { server };
