const gitmojis: Record<string, string> = {
  ":art:": "๐จ",
  ":zap:": "โก๏ธ",
  ":fire:": "๐ฅ",
  ":bug:": "๐",
  ":ambulance:": "๐๏ธ",
  ":sparkles:": "โจ",
  ":memo:": "๐",
  ":rocket:": "๐",
  ":lipstick:": "๐",
  ":tada:": "๐",
  ":white_check_mark:": "โ",
  ":lock:": "๐๏ธ",
  ":closed_lock_with_key:": "๐",
  ":bookmark:": "๐",
  ":rotating_light:": "๐จ",
  ":construction:": "๐ง",
  ":green_heart:": "๐",
  ":arrow_down:": "โฌ๏ธ",
  ":arrow_up:": "โฌ๏ธ",
  ":pushpin:": "๐",
  ":construction_worker:": "๐ท",
  ":chart_with_upwards_trend:": "๐",
  ":recycle:": "โป๏ธ",
  ":heavy_plus_sign:": "โ",
  ":heavy_minus_sign:": "โ",
  ":wrench:": "๐ง",
  ":hammer:": "๐จ",
  ":globe_with_meridians:": "๐",
  ":pencil2:": "โ๏ธ",
  ":pencil:": "โ๏ธ", // Unsure ?
  ":poop:": "๐ฉ",
  ":rewind:": "โช๏ธ",
  ":twisted_rightwards_arrows:": "๐",
  ":package:": "๐ฆ๏ธ",
  ":alien:": "๐ฝ๏ธ",
  ":truck:": "๐",
  ":page_facing_up:": "๐",
  ":boom:": "๐ฅ",
  ":bento:": "๐ฑ",
  ":wheelchair:": "โฟ๏ธ",
  ":bulb:": "๐ก",
  ":beers:": "๐ป",
  ":speech_balloon:": "๐ฌ",
  ":card_file_box:": "๐๏ธ",
  ":loud_sound:": "๐",
  ":mute:": "๐",
  ":busts_in_silhouette:": "๐ฅ",
  ":children_crossing:": "๐ธ",
  ":building_construction:": "๐๏ธ",
  ":iphone:": "๐ฑ",
  ":clown_face:": "๐คก",
  ":egg:": "๐ฅ",
  ":see_no_evil:": "๐",
  ":camera_flash:": "๐ธ",
  ":alembic:": "โ๏ธ",
  ":mag:": "๐๏ธ",
  ":label:": "๐ท๏ธ",
  ":seedling:": "๐ฑ",
  ":triangular_flag_on_post:": "๐ฉ",
  ":goal_net:": "๐ฅ",
  ":dizzy:": "๐ซ",
  ":wastebasket:": "๐๏ธ",
  ":passport_control:": "๐",
  ":adhesive_bandage:": "๐ฉน",
  ":monocle_face:": "๐ง",
  ":coffin:": "โฐ๏ธ",
  ":test_tube:": "๐งช",
  ":necktie:": "๐",
  ":stethoscope:": "๐ฉบ",
  ":bricks:": "๐งฑ",
  ":technologist:": "๐งโ๐ป",
  ":money_with_wings:": "๐ธ",
};

export function convert(content: string, withSpace?: boolean | "leading" | "trailing" | "both") {
  const re = new RegExp(Object.keys(gitmojis).join("|"), "gi");
  return content.replace(re, function (matched) {
    switch (withSpace) {
      case true:
      case "trailing":
        return `${gitmojis[matched.toLowerCase()]} `
      case "leading":
        return ` ${gitmojis[matched.toLowerCase()]}`
      case "both":
        return ` ${gitmojis[matched.toLowerCase()]} `
      default:
        return gitmojis[matched.toLowerCase()]
    }
  });
}
