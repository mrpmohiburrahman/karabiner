const all = [
  [
    "o",
    {
      g: {
        to: [{ shell_command: "open -a 'Google Chrome.app'" }],
        description: "Open -a 'Google Chrome.app'",
      },
      c: {
        to: [{ shell_command: "open -a 'Cron.app'" }],
        description: "Open -a 'Cron.app'",
      },
      v: {
        to: [{ shell_command: "open -a 'Visual Studio Code.app'" }],
        description: "Open -a 'Visual Studio Code.app'",
      },
      d: {
        to: [{ shell_command: "open -a 'Discord.app'" }],
        description: "Open -a 'Discord.app'",
      },
      s: {
        to: [{ shell_command: "open -a 'Slack.app'" }],
        description: "Open -a 'Slack.app'",
      },
      e: {
        to: [{ shell_command: "open -a 'Superhuman.app'" }],
        description: "Open -a 'Superhuman.app'",
      },
      n: {
        to: [{ shell_command: "open -a 'Notion.app'" }],
        description: "Open -a 'Notion.app'",
      },
      t: {
        to: [{ shell_command: "open -a 'Terminal.app'" }],
        description: "Open -a 'Terminal.app'",
      },
      h: {
        to: [
          {
            shell_command:
              "open notion://www.notion.so/graphcdn/7b33b924746647499d906c55f89d5026?v=7f9a78e5477d40088f54bdbaf212f304",
          },
        ],
        description:
          "Open notion://www.notion.so/graphcdn/7b33b924746647499d906c55f89d5026?v=7f9a78e5477d40088f54bdbaf212f304",
      },
      z: {
        to: [{ shell_command: "open -a 'zoom.us.app'" }],
        description: "Open -a 'zoom.us.app'",
      },
      m: {
        to: [{ shell_command: "open -a 'Muse.app'" }],
        description: "Open -a 'Muse.app'",
      },
      f: {
        to: [{ shell_command: "open -a 'Figma.app'" }],
        description: "Open -a 'Figma.app'",
      },
      r: {
        to: [{ shell_command: "open -a 'Telegram.app'" }],
        description: "Open -a 'Telegram.app'",
      },
      i: {
        to: [{ shell_command: "open -a 'Messages.app'" }],
        description: "Open -a 'Messages.app'",
      },
      p: {
        to: [{ shell_command: "open -a 'Spotify.app'" }],
        description: "Open -a 'Spotify.app'",
      },
    },
  ],
  [
    "w",
    {
      semicolon: {
        description: "Window: Hide",
        to: [{ key_code: "h", modifiers: ["right_command"] }],
      },
      h: {
        description: "Window: First Third",
        to: [
          {
            key_code: "left_arrow",
            modifiers: ["right_option", "right_control"],
          },
        ],
      },
      k: {
        description: "Window: Top Half",
        to: [
          {
            key_code: "up_arrow",
            modifiers: ["right_option", "right_command"],
          },
        ],
      },
      j: {
        description: "Window: Bottom Half",
        to: [
          {
            key_code: "down_arrow",
            modifiers: ["right_option", "right_command"],
          },
        ],
      },
      l: {
        description: "Window: Last Third",
        to: [
          {
            key_code: "right_arrow",
            modifiers: ["right_option", "right_control"],
          },
        ],
      },
      y: {
        description: "Window: Left Half",
        to: [
          {
            key_code: "left_arrow",
            modifiers: ["right_option", "right_command"],
          },
        ],
      },
      o: {
        description: "Window: Right Half",
        to: [
          {
            key_code: "right_arrow",
            modifiers: ["right_option", "right_command"],
          },
        ],
      },
      f: {
        description: "Window: Full Screen",
        to: [{ key_code: "f", modifiers: ["right_option", "right_command"] }],
      },
      u: {
        description: "Window: Previous Tab",
        to: [{ key_code: "tab", modifiers: ["right_control", "right_shift"] }],
      },
      i: {
        description: "Window: Next Tab",
        to: [{ key_code: "tab", modifiers: ["right_control"] }],
      },
      n: {
        description: "Window: Next Window",
        to: [
          {
            key_code: "grave_accent_and_tilde",
            modifiers: ["right_command"],
          },
        ],
      },
      b: {
        description: "Window: Back",
        to: [{ key_code: "open_bracket", modifiers: ["right_command"] }],
      },
      m: {
        description: "Window: Forward",
        to: [{ key_code: "close_bracket", modifiers: ["right_command"] }],
      },
    },
  ],
  [
    "s",
    {
      u: { to: [{ key_code: "volume_increment" }] },
      j: { to: [{ key_code: "volume_decrement" }] },
      i: { to: [{ key_code: "display_brightness_increment" }] },
      k: { to: [{ key_code: "display_brightness_decrement" }] },
      l: {
        to: [{ key_code: "q", modifiers: ["right_control", "right_command"] }],
      },
      p: { to: [{ key_code: "play_or_pause" }] },
      semicolon: { to: [{ key_code: "fastforward" }] },
      e: {
        to: [
          {
            key_code: "spacebar",
            modifiers: ["right_control", "right_command"],
          },
        ],
      },
      y: {
        to: [
          {
            shell_command:
              'curl -H \'Content-Type: application/json\' --request PUT --data \'{ "numberOfLights": 1, "lights": [ { "on": 1, "brightness": 100, "temperature": 215 } ] }\' http://192.168.8.84:9123/elgato/lights',
          },
        ],
      },
      h: {
        to: [
          {
            shell_command:
              'curl -H \'Content-Type: application/json\' --request PUT --data \'{ "numberOfLights": 1, "lights": [ { "on": 0, "brightness": 100, "temperature": 215 } ] }\' http://192.168.8.84:9123/elgato/lights',
          },
        ],
      },
    },
  ],
  [
    "v",
    {
      h: { to: [{ key_code: "left_arrow" }] },
      j: { to: [{ key_code: "down_arrow" }] },
      k: { to: [{ key_code: "up_arrow" }] },
      l: { to: [{ key_code: "right_arrow" }] },
      m: { to: [{ key_code: "f", modifiers: ["right_control"] }] },
      s: { to: [{ key_code: "j", modifiers: ["right_control"] }] },
      d: {
        to: [{ key_code: "d", modifiers: ["right_shift", "right_command"] }],
      },
    },
  ],
  [
    "c",
    {
      p: { to: [{ key_code: "play_or_pause" }] },
      n: { to: [{ key_code: "fastforward" }] },
      b: { to: [{ key_code: "rewind" }] },
    },
  ],
];

const single = {
  g: {
    to: [{ shell_command: "open -a 'Google Chrome.app'" }],
    description: "Open -a 'Google Chrome.app'",
  },
  c: {
    to: [{ shell_command: "open -a 'Cron.app'" }],
    description: "Open -a 'Cron.app'",
  },
};
const subLayers = {
  o: {
    g: {
      to: [{ shell_command: "open -a 'Google Chrome.app'" }],
      description: "Open -a 'Google Chrome.app'",
    },
    c: {
      to: [{ shell_command: "open -a 'Cron.app'" }],
      description: "Open -a 'Cron.app'",
    },
  },
  w: {
    semicolon: {
      description: "Window: Hide",
      to: [{ key_code: "h", modifiers: ["right_command"] }],
    },
    h: {
      description: "Window: First Third",
      to: [
        {
          key_code: "left_arrow",
          modifiers: ["right_option", "right_control"],
        },
      ],
    },
  },
  s: {
    u: { to: [{ key_code: "volume_increment" }] },
    j: { to: [{ key_code: "volume_decrement" }] },
    i: { to: [{ key_code: "display_brightness_increment" }] },
    k: { to: [{ key_code: "display_brightness_decrement" }] },
    l: {
      to: [{ key_code: "q", modifiers: ["right_control", "right_command"] }],
    },
    p: { to: [{ key_code: "play_or_pause" }] },
    semicolon: { to: [{ key_code: "fastforward" }] },
    e: {
      to: [
        {
          key_code: "spacebar",
          modifiers: ["right_control", "right_command"],
        },
      ],
    },
    y: {
      to: [
        {
          shell_command:
            'curl -H \'Content-Type: application/json\' --request PUT --data \'{ "numberOfLights": 1, "lights": [ { "on": 1, "brightness": 100, "temperature": 215 } ] }\' http://192.168.8.84:9123/elgato/lights',
        },
      ],
    },
    h: {
      to: [
        {
          shell_command:
            'curl -H \'Content-Type: application/json\' --request PUT --data \'{ "numberOfLights": 1, "lights": [ { "on": 0, "brightness": 100, "temperature": 215 } ] }\' http://192.168.8.84:9123/elgato/lights',
        },
      ],
    },
  },
  v: {
    h: { to: [{ key_code: "left_arrow" }] },
    j: { to: [{ key_code: "down_arrow" }] },
    k: { to: [{ key_code: "up_arrow" }] },
    l: { to: [{ key_code: "right_arrow" }] },
    m: { to: [{ key_code: "f", modifiers: ["right_control"] }] },
    s: { to: [{ key_code: "j", modifiers: ["right_control"] }] },
    d: {
      to: [{ key_code: "d", modifiers: ["right_shift", "right_command"] }],
    },
  },
  c: {
    p: { to: [{ key_code: "play_or_pause" }] },
    n: { to: [{ key_code: "fastforward" }] },
    b: { to: [{ key_code: "rewind" }] },
  },
};

Object.entries(subLayers).map(([key, value], index) => {
  // console.log(`${index}--${key}---${JSON.stringify(value)}`);
  // 4--c---{"p":{"to":[{"key_code":"play_or_pause"}]},"n":{"to":[{"key_code":"fastforward"}]},"b":{"to":[{"key_code":"rewind"}]}}
  const allKeysForThisLayer = Object.keys(value);
  console.log(allKeysForThisLayer);
  let isAllowed = false;
  for (const item of allKeysForThisLayer) {
    if (`to` in value[item]) {
      console.log(`to` in value[item]);
      isAllowed = true;
      return;
    }
  }
  // allKeysForThisLayer.forEach((item) => {
  //   console.log(`to` in value[item]);
  //   return;
  //   // break;
  //   // item;
  // });

  // if (values.some((value) => value.hasOwnProperty("level2"))) {
  //   console.log('Key "level2" exists in obj at the second level');
  // }
});
// console.log("to" in subLayers.g);
