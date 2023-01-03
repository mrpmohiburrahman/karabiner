import fs from "fs";
import { devices } from "./externalKeyboardRules";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open } from "./utils";

const rules: KarabinerRules[] = [
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "Caps Lock -> Hyper Key",
        from: {
          key_code: "caps_lock",
        },
        to: [
          {
            key_code: "left_shift",
            modifiers: ["left_command", "left_control", "left_option"],
          },
        ],
        to_if_alone: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
      {
        type: "basic",
        description: "Disable CMD + Tab to force Hyper Key usage",
        from: {
          key_code: "tab",
          modifiers: {
            mandatory: ["left_command"],
          },
        },
        to: [
          {
            key_code: "tab",
          },
        ],
      },
      {
        type: "basic",
        description: "Slash -> Hyper Key",
        from: {
          key_code: "slash",
        },
        to: [
          {
            key_code: "left_shift",
            modifiers: ["left_command", "left_control", "left_option"],
          },
        ],
        to_if_alone: [
          {
            key_code: "slash",
          },
        ],
      },
    ],
  },
  ...createHyperSubLayers({
    // o = "Open" applications
    o: {
      g: app("Google Chrome"),
      c: app("Cron"),
      v: app("Visual Studio Code"),
      d: app("Discord"),
      s: app("Slack"),
      e: app("Superhuman"),
      n: app("Notion"),
      t: app("Terminal"),
      // Open todo list managed via *H*ypersonic
      h: open(
        "notion://www.notion.so/graphcdn/7b33b924746647499d906c55f89d5026?v=7f9a78e5477d40088f54bdbaf212f304"
      ),
      z: app("zoom.us"),
      m: app("Muse"),
      f: app("Figma"),
      r: app("Telegram"),
      // "i"Message
      i: app("Messages"),
      p: app("Spotify"),
    },
    // // w = "Window" via rectangle.app
    // w: {
    //   semicolon: {
    //     description: "Window: Hide",
    //     to: [
    //       {
    //         key_code: "h",
    //         modifiers: ["right_command"],
    //       },
    //     ],
    //   },
    //   h: {
    //     description: "Window: First Third",
    //     to: [
    //       {
    //         key_code: "left_arrow",
    //         modifiers: ["right_option", "right_control"],
    //       },
    //     ],
    //   },
    //   k: {
    //     description: "Window: Top Half",
    //     to: [
    //       {
    //         key_code: "up_arrow",
    //         modifiers: ["right_option", "right_command"],
    //       },
    //     ],
    //   },
    //   j: {
    //     description: "Window: Bottom Half",
    //     to: [
    //       {
    //         key_code: "down_arrow",
    //         modifiers: ["right_option", "right_command"],
    //       },
    //     ],
    //   },
    //   l: {
    //     description: "Window: Last Third",
    //     to: [
    //       {
    //         key_code: "right_arrow",
    //         modifiers: ["right_option", "right_control"],
    //       },
    //     ],
    //   },
    //   y: {
    //     description: "Window: Left Half",
    //     to: [
    //       {
    //         key_code: "left_arrow",
    //         modifiers: ["right_option", "right_command"],
    //       },
    //     ],
    //   },
    //   o: {
    //     description: "Window: Right Half",
    //     to: [
    //       {
    //         key_code: "right_arrow",
    //         modifiers: ["right_option", "right_command"],
    //       },
    //     ],
    //   },
    //   f: {
    //     description: "Window: Full Screen",
    //     to: [
    //       {
    //         shell_command:
    //           "/opt/homebrew/bin/yabai -m window --toggle zoom-fullscreen",
    //       },
    //     ],
    //   },
    //   u: {
    //     description: "Window: Previous Tab",
    //     to: [
    //       {
    //         key_code: "tab",
    //         modifiers: ["right_control", "right_shift"],
    //       },
    //     ],
    //   },
    //   i: {
    //     description: "Window: Next Tab",
    //     to: [
    //       {
    //         key_code: "tab",
    //         modifiers: ["right_control"],
    //       },
    //     ],
    //   },
    //   n: {
    //     description: "Window: Next Window",
    //     to: [
    //       {
    //         key_code: "grave_accent_and_tilde",
    //         modifiers: ["right_command"],
    //       },
    //     ],
    //   },
    //   b: {
    //     description: "Window: Back",
    //     to: [
    //       {
    //         key_code: "open_bracket",
    //         modifiers: ["right_command"],
    //       },
    //     ],
    //   },
    //   // Note: No literal connection. Both f and n are already taken.
    //   m: {
    //     description: "Window: Forward",
    //     to: [
    //       {
    //         key_code: "close_bracket",
    //         modifiers: ["right_command"],
    //       },
    //     ],
    //   },
    // },

    // // s = "System"
    // s: {
    //   u: {
    //     to: [
    //       {
    //         key_code: "volume_increment",
    //       },
    //     ],
    //   },
    //   j: {
    //     to: [
    //       {
    //         key_code: "volume_decrement",
    //       },
    //     ],
    //   },
    //   i: {
    //     to: [
    //       {
    //         key_code: "display_brightness_increment",
    //       },
    //     ],
    //   },
    //   k: {
    //     to: [
    //       {
    //         key_code: "display_brightness_decrement",
    //       },
    //     ],
    //   },
    //   l: {
    //     to: [
    //       {
    //         key_code: "q",
    //         modifiers: ["right_control", "right_command"],
    //       },
    //     ],
    //   },
    //   p: {
    //     to: [
    //       {
    //         key_code: "play_or_pause",
    //       },
    //     ],
    //   },
    //   semicolon: {
    //     to: [
    //       {
    //         key_code: "fastforward",
    //       },
    //     ],
    //   },
    //   e: {
    //     to: [
    //       {
    //         // Emoji picker
    //         key_code: "spacebar",
    //         modifiers: ["right_control", "right_command"],
    //       },
    //     ],
    //   },
    //   // Turn on Elgato KeyLight
    //   y: {
    //     to: [
    //       {
    //         shell_command: `curl -H 'Content-Type: application/json' --request PUT --data '{ "numberOfLights": 1, "lights": [ { "on": 1, "brightness": 100, "temperature": 215 } ] }' http://192.168.8.84:9123/elgato/lights`,
    //       },
    //     ],
    //   },
    //   h: {
    //     to: [
    //       {
    //         shell_command: `curl -H 'Content-Type: application/json' --request PUT --data '{ "numberOfLights": 1, "lights": [ { "on": 0, "brightness": 100, "temperature": 215 } ] }' http://192.168.8.84:9123/elgato/lights`,
    //       },
    //     ],
    //   },
    // },

    // // v = "moVe" which isn't "m" because we want it to be on the left hand
    // // so that hjkl work like they do in vim
    // v: {
    //   h: {
    //     to: [{ key_code: "left_arrow" }],
    //   },
    //   j: {
    //     to: [{ key_code: "down_arrow" }],
    //   },
    //   k: {
    //     to: [{ key_code: "up_arrow" }],
    //   },
    //   l: {
    //     to: [{ key_code: "right_arrow" }],
    //   },
    //   // Magicmove via homerow.app
    //   m: {
    //     to: [{ key_code: "f", modifiers: ["right_control"] }],
    //   },
    //   // Scroll mode via homerow.app
    //   s: {
    //     to: [{ key_code: "j", modifiers: ["right_control"] }],
    //   },
    //   d: {
    //     to: [{ key_code: "d", modifiers: ["right_shift", "right_command"] }],
    //   },
    // },

    // // c = Musi*c* which isn't "m" because we want it to be on the left hand
    // c: {
    //   p: {
    //     to: [{ key_code: "play_or_pause" }],
    //   },
    //   n: {
    //     to: [{ key_code: "fastforward" }],
    //   },
    //   b: {
    //     to: [{ key_code: "rewind" }],
    //   },
    // },
  }),
];

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: {
        show_in_menu_bar: false,
      },
      profiles: [
        {
          name: "mrpConfig",
          complex_modifications: {
            rules,
          },
          devices, // for external keyboard: fn_function_keys and simple_modifications
        },
      ],
    },
    null,
    2
  )
);
