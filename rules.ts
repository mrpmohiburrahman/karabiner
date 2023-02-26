import fs from "fs";
import { fn_function_keys } from "./defaultfunctionKeys";
import { devices } from "./externalKeyboardRules";
import { KarabinerRules } from "./types";
import { app, createHyperSubLayers, open } from "./utils";

const rules: KarabinerRules[] = [
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "Caps Lock -> Hyper Key",
        from: { key_code: "caps_lock" },
        to: [
          {
            key_code: "left_shift",
            modifiers: ["left_command", "left_control", "left_option"],
          },
        ],
        to_if_alone: [{ key_code: "escape" }],
        type: "basic",
      },
      // {
      //   type: "basic",
      //   description: "Disable CMD + Tab to force Hyper Key usage",
      //   from: {
      //     key_code: "tab",
      //     modifiers: { mandatory: ["left_command"] },
      //   },
      //   to: [{ key_code: "tab" }],
      // },
      {
        type: "basic",
        description: "Slash -> Hyper Key",
        from: { key_code: "slash" },
        to: [
          {
            key_code: "left_shift",
            modifiers: ["left_command", "left_control", "left_option"],
          },
        ],
        to_if_alone: [{ key_code: "slash" }],
      },
    ],
  },
  {
    description: "vlc-increment",
    manipulators: [
      {
        conditions: [
          {
            bundle_identifiers: ["org.videolan.vlc"],
            file_paths: ["/Applications/VLC.app/Contents/MacOS/VLC"],
            type: "frontmost_application_if",
          },
        ],
        from: {
          key_code: "grave_accent_and_tilde",
        },
        to: [
          {
            key_code: "keypad_plus",
          },
        ],
        type: "basic",
      },
    ],
  },
  {
    description: "vlc-decrement",
    manipulators: [
      {
        conditions: [
          {
            bundle_identifiers: ["org.videolan.vlc"],
            file_paths: ["/Applications/VLC.app/Contents/MacOS/VLC"],
            type: "frontmost_application_if",
          },
        ],
        from: {
          key_code: "tab",
        },
        to: [
          {
            key_code: "keypad_hyphen",
          },
        ],
        type: "basic",
      },
    ],
  },
  {
    description: "firefox-video-speed-increment",
    manipulators: [
      {
        conditions: [
          {
            bundle_identifiers: ["org.mozilla.firefox"],
            file_paths: ["/Applications/Firefox.app/Contents/MacOS/firefox"],
            type: "frontmost_application_if",
          },
        ],
        from: {
          key_code: "keypad_plus",
        },
        to: [
          {
            key_code: "equal_sign",
          },
        ],
        type: "basic",
      },
    ],
  },
  {
    description: "firefox-video-speed-decrement",
    manipulators: [
      {
        conditions: [
          {
            bundle_identifiers: ["org.mozilla.firefox"],
            file_paths: ["/Applications/Firefox.app/Contents/MacOS/firefox"],
            type: "frontmost_application_if",
          },
        ],
        from: {
          key_code: "keypad_hyphen",
        },
        to: [
          {
            key_code: "hyphen",
          },
        ],
        type: "basic",
      },
    ],
  },
  {
    description: "Left CMD -> bn",
    manipulators: [
      {
        from: {
          key_code: "left_command",
          modifiers: {
            mandatory: ["right_command"],
            optional: ["any"],
          },
        },
        to: [
          {
            key_code: "spacebar",
            modifiers: ["control"],
          },
        ],
        type: "basic",
      },
    ],
  },
  {
    description: "Right CMD -> en",
    manipulators: [
      {
        from: {
          key_code: "right_command",
        },
        to: [
          {
            key_code: "right_command",
          },
        ],
        to_if_alone: [
          {
            select_input_source: {
              input_source_id: "com.apple.keylayout.Colemak",
              language: "en",
            },
          },
        ],
        type: "basic",
      },
    ],
  },
  {
    "description": "Use Return as Open if not renaming file",
    "manipulators": [
      {
        "conditions": [
          {
            "bundle_identifiers": ["^com.apple.finder"],
            "type": "frontmost_application_if"
          },
          {
            "name": "onedit",
            "type": "variable_unless",
            "value": 1
          }
        ],
        "from": {
          "key_code": "return_or_enter",
          "modifiers": {
            "optional": ["any"]
          }
        },
        "to": [
          {
            "key_code": "semicolon",
            "modifiers": ["right_command"]
          }
        ],
        "type": "basic"
      }
    ]
  },
  {
    "description": "Use F2 as Rename and set onedit",
    "manipulators": [
      {
        "conditions": [
          {
            "bundle_identifiers": ["^com.apple.finder"],
            "type": "frontmost_application_if"
          }
        ],
        "from": {
          "key_code": "f2"
        },
        "to": [
          {
            "key_code": "return_or_enter"
          },
          {
            "set_variable": {
              "name": "onedit",
              "value": 1
            }
          }
        ],
        "type": "basic"
      }
    ]
  },
  {
    "description": "Use Backspace as Go to Previous Folder in Finder if not onedit",
    "manipulators": [
      {
        "conditions": [
          {
            "bundle_identifiers": ["^com.apple.finder"],
            "type": "frontmost_application_if"
          },
          {
            "name": "onedit",
            "type": "variable_if",
            "value": 0
          }
        ],
        "from": {
          "key_code": "delete_or_backspace"
        },
        "to": [
          {
            "key_code": "open_bracket",
            "modifiers": ["left_command"]
          }
        ],
        "type": "basic"
      }
    ]
  },
  {
    "description": "Use Return to finish renaming when onedit=1",
    "manipulators": [
      {
        "conditions": [
          {
            "bundle_identifiers": ["^com.apple.finder"],
            "type": "frontmost_application_if"
          },
          {
            "name": "onedit",
            "type": "variable_if",
            "value": 1
          }
        ],
        "from": {
          "key_code": "return_or_enter",
          "modifiers": {
            "optional": ["any"]
          }
        },
        "to": [
          {
            "key_code": "return_or_enter"
          },
          {
            "set_variable": {
              "name": "onedit",
              "value": 0
            }
          }
        ],
        "type": "basic"
      }
    ]
  },
  {
    "description": "Use Esc to finish renaming when onedit=1",
    "manipulators": [
      {
        "conditions": [
          {
            "bundle_identifiers": ["^com.apple.finder"],
            "type": "frontmost_application_if"
          },
          {
            "name": "onedit",
            "type": "variable_if",
            "value": 1
          }
        ],
        "from": {
          "key_code": "escape",
          "modifiers": {
            "optional": ["any"]
          }
        },
        "to": [
          {
            "key_code": "escape"
          },
          {
            "set_variable": {
              "name": "onedit",
              "value": 0
            }
          }
        ],
        "type": "basic"
      }
    ]
  },
  ...createHyperSubLayers({
    // o = "Open" applications
    o: {
      g: app("Google Chrome"),
      c: app("Cron"),
      v: app("Visual Studio Code"),
      d: app("Discord"),
      s: app("Slack"),
      n: app("Notion"),
      t: app("iTerm"),
      // Open todo list managed via *H*ypersonic
      z: app("zoom.us"),
      f: app("Firefox"),
      r: app("Telegram Desktop"),
    },
    // w = "Window" via rectangle.app
    w: {
      t: {
        description: "hyper+t ==> float / unfloat window and center on screen",
        to: [
          {
            shell_command:
              "/opt/homebrew/bin/yabai -m window --toggle float; /opt/homebrew/bin/yabai -m window --grid 4:4:1:1:2:2",
          },
        ],
      },
      f: {
        description: "Window: Full Screen",
        to: [
          {
            shell_command:
              "/opt/homebrew/bin/yabai -m window --toggle zoom-fullscreen",
          },
        ],
      },
      y: {
        description: "hyper+y ==> swap window west",
        to: [
          {
            shell_command: "/opt/homebrew/bin/yabai -m window --swap west",
          },
        ],
      },
      h: {
        description: "hyper+h ==> send window to monitor and follow focus",
        to: [
          {
            shell_command:
              "/bin/dash /Users/mrp/dotfilesOSX/yabai/moveWindowLeftAndFollowFocus.sh",
          },
        ],
      },
      semicolon: {
        description: "hyper+; ==> swap window east",
        to: [
          {
            shell_command: "/opt/homebrew/bin/yabai -m window --swap east",
          },
        ],
      },
      n: {
        description: "go to workspack 1",
        to: [
          {
            shell_command: `DISPLAY="$(/opt/homebrew/bin/yabai -m query --displays --display | /opt/homebrew/bin/jq '.index')"; /opt/homebrew/bin/yabai -m space --focus $((1+4*($DISPLAY - 1)))`,
          },
        ],
      },
      e: {
        description: "go to workspack 2",
        to: [
          {
            shell_command: `DISPLAY="$(/opt/homebrew/bin/yabai -m query --displays --display | /opt/homebrew/bin/jq '.index')"; /opt/homebrew/bin/yabai -m space --focus $((2+4*($DISPLAY - 1)))`,
          },
        ],
      },
      i: {
        description: "go to workspack 3",
        to: [
          {
            shell_command: `DISPLAY="$(/opt/homebrew/bin/yabai -m query --displays --display | /opt/homebrew/bin/jq '.index')"; /opt/homebrew/bin/yabai -m space --focus $((3+4*($DISPLAY - 1)))`,
          },
        ],
      },
      o: {
        description: "go to workspack 4",
        to: [
          {
            shell_command: `DISPLAY="$(/opt/homebrew/bin/yabai -m query --displays --display | /opt/homebrew/bin/jq '.index')"; /opt/homebrew/bin/yabai -m space --focus $((4+4*($DISPLAY - 1)))`,
          },
        ],
      },
      // h: {
      //   description: "Window: First Third",
      //   to: [
      //     {
      //       key_code: "left_arrow",
      //       modifiers: ["right_option", "right_control"],
      //     },
      //   ],
      // },
      // k: {
      //   description: "Window: Top Half",
      //   to: [
      //     {
      //       key_code: "up_arrow",
      //       modifiers: ["right_option", "right_command"],
      //     },
      //   ],
      // },
      // j: {
      //   description: "Window: Bottom Half",
      //   to: [
      //     {
      //       key_code: "down_arrow",
      //       modifiers: ["right_option", "right_command"],
      //     },
      //   ],
      // },
      // l: {
      //   description: "Window: Last Third",
      //   to: [
      //     {
      //       key_code: "right_arrow",
      //       modifiers: ["right_option", "right_control"],
      //     },
      //   ],
      // },
      // y: {
      //   description: "Window: Left Half",
      //   to: [
      //     {
      //       key_code: "left_arrow",
      //       modifiers: ["right_option", "right_command"],
      //     },
      //   ],
      // },
      // o: {
      //   description: "Window: Right Half",
      //   to: [
      //     {
      //       key_code: "right_arrow",
      //       modifiers: ["right_option", "right_command"],
      //     },
      //   ],
      // },
      // u: {
      //   description: "Window: Previous Tab",
      //   to: [
      //     {
      //       key_code: "tab",
      //       modifiers: ["right_control", "right_shift"],
      //     },
      //   ],
      // },
      // i: {
      //   description: "Window: Next Tab",
      //   to: [
      //     {
      //       key_code: "tab",
      //       modifiers: ["right_control"],
      //     },
      //   ],
      // },
      // n: {
      //   description: "Window: Next Window",
      //   to: [
      //     {
      //       key_code: "grave_accent_and_tilde",
      //       modifiers: ["right_command"],
      //     },
      //   ],
      // },
      // b: {
      //   description: "Window: Back",
      //   to: [
      //     {
      //       key_code: "open_bracket",
      //       modifiers: ["right_command"],
      //     },
      //   ],
      // },
      // // Note: No literal connection. Both f and n are already taken.
      // m: {
      //   description: "Window: Forward",
      //   to: [
      //     {
      //       key_code: "close_bracket",
      //       modifiers: ["right_command"],
      //     },
      //   ],
      // },
    },

    // // s = "System"

    s: {
      l: { to: [{ key_code: "volume_increment" }] },
      n: { to: [{ key_code: "volume_decrement" }] },
      // i: { to: [{ key_code: "display_brightness_increment" }] },
      // k: { to: [{ key_code: "display_brightness_decrement" }] },
      // b: {
      //   description: `change language to bn`,
      //   to: [{ key_code: "spacebar", modifiers: ["control"] }],
      // },
      // e: {
      //   description: `change language to en`,
      //   to: [{ key_code: "right_command", modifiers: ["control"] }],
      // },

      // l: {
      //   to: [{ key_code: "q", modifiers: ["right_control", "right_command"] }],
      // },
      // p: { to: [{ key_code: "play_or_pause" }] },
      // semicolon: { to: [{ key_code: "fastforward" }] },
      // e: {
      //   to: [
      //     {
      //       // Emoji picker
      //       key_code: "spacebar",
      //       modifiers: ["right_control", "right_command"],
      //     },
      //   ],
      // },
      // Turn on Elgato KeyLight
      // y: {
      //   to: [
      //     {
      //       shell_command: `curl -H 'Content-Type: application/json' --request PUT --data '{ "numberOfLights": 1, "lights": [ { "on": 1, "brightness": 100, "temperature": 215 } ] }' http://192.168.8.84:9123/elgato/lights`,
      //     },
      //   ],
      // },
      // h: {
      //   to: [
      //     {
      //       shell_command: `curl -H 'Content-Type: application/json' --request PUT --data '{ "numberOfLights": 1, "lights": [ { "on": 0, "brightness": 100, "temperature": 215 } ] }' http://192.168.8.84:9123/elgato/lights`,
      //     },
      //   ],
      // },
    },

    // v = "moVe" which isn't "m" because we want it to be on the left hand
    // so that hjkl work like they do in vim
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

const parameters = { delay_milliseconds_before_open_device: 1000 };
const selected = true;
const virtual_hid_keyboard = {
  country_code: 0,
  indicate_sticky_modifier_keys_state: true,
  mouse_key_xy_scale: 100,
};

const global = {
  check_for_updates_on_startup: true,
  show_in_menu_bar: true,
  show_profile_name_in_menu_bar: false,
};

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global,
      profiles: [
        {
          name: "mrpConfig",
          complex_modifications: { rules }, // all generated rules
          devices, // for external keyboard: fn_function_keys and simple_modifications ( command and options buttons )
          fn_function_keys,
          parameters,
          selected,
          virtual_hid_keyboard,
        },
      ],
    },
    null,
    2
  )
);
