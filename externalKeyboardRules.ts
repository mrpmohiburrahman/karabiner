export const devices = [
  {
    disable_built_in_keyboard_if_exists: false,
    fn_function_keys: [
      {
        from: {
          key_code: "f2",
        },
        to: [
          {
            consumer_key_code: "volume_decrement",
          },
        ],
      },
      {
        from: {
          key_code: "f3",
        },
        to: [
          {
            consumer_key_code: "volume_increment",
          },
        ],
      },
      {
        from: {
          key_code: "f4",
        },
        to: [
          {
            consumer_key_code: "mute",
          },
        ],
      },
    ],
    identifiers: {
      is_keyboard: true,
      is_pointing_device: false,
      product_id: 41067,
      vendor_id: 1241,
    },
    ignore: false,
    manipulate_caps_lock_led: true,
    simple_modifications: [
      {
        from: {
          key_code: "left_command",
        },
        to: [
          {
            key_code: "left_option",
          },
        ],
      },
      {
        from: {
          key_code: "left_option",
        },
        to: [
          {
            key_code: "left_command",
          },
        ],
      },
      {
        from: {
          key_code: "right_option",
        },
        to: [
          {
            key_code: "right_command",
          },
        ],
      },
    ],
  },
];
