const tripsData = [
  {
    id: "iwate2026",
    title: "岩手・盛岡旅行 2026",
    dates: "2026.08.22 - 08.23",
    location: "盛岡・花巻・平泉",
    timeline: [
      {
        day: "Day 1",
        date: "2026年8月22日（土）",
        spots: [
          { time: "06:50", title: "自宅出発", type: "start", note: "多恵さんの青森研修に合わせた岩手旅行。" },
          { time: "07:09", title: "矢切駅", type: "train", note: "矢切から乗車。" },
          { time: "07:47", title: "上野駅", type: "spot", note: "鳥弁当と水を購入。" },
          { time: "08:02", title: "東北新幹線 はやぶさ103号", type: "train", note: "盛岡へ。" },
          { time: "10:50", title: "盛岡駅", type: "spot", note: "盛岡到着。" },
          { time: "11:05", title: "もりおか啄木・賢治青春館", type: "spot", note: "バスで移動。" },
          { time: "11:45", title: "岩手銀行赤レンガ館", type: "spot", image: "images/iwate_bank.jpg", familyImage: "images/iwate_family.jpg", note: "歴史ある赤レンガ建築を見学。" },
          { time: "12:30", title: "中ノ橋", type: "spot", note: "中津川にかかる中ノ橋より南側の岩手山を望む。" },
          { time: "12:45", title: "紺屋町番屋", type: "spot", note: "散策しながら盛岡駅方面へ。" },
          { time: "13:00", title: "やまなか屋 盛岡大通店", type: "food", note: "焼肉と冷麺。" },
          { time: "13:59", title: "JR東北本線", type: "train", note: "花巻空港駅へ。" },
          { time: "14:30", title: "宮沢賢治記念館", type: "spot", note: "花巻空港駅からタクシーで移動。" },
          { time: "15:15", title: "宮沢賢治イーハトーブ館", type: "spot", note: "宮沢賢治の世界に触れる。" },
          { time: "15:30", title: "宮沢賢治童話村", type: "spot", note: "童話の世界を体験。" },
          { time: "16:50", title: "新花巻駅", type: "train", note: "バスで移動。" },
          { time: "17:11", title: "JR快速はまゆり", type: "train", note: "花巻空港駅へ。" },
          { time: "17:39", title: "JR東北本線", type: "train", note: "平泉駅へ。" },
          { time: "18:23", title: "平泉駅", type: "spot", note: "到着。" },
          { time: "18:40", title: "旅館 舞鶴", type: "hotel", note: "チェックイン。" },
          { time: "19:00", title: "夕食", type: "food", note: "大トロのマグロ刺身、松阪牛の陶板焼き、牛の頬肉のシチュー、白とうもろこしの冷製スープ、里芋のけんちん汁、うなぎの蒲焼、黒胡麻タレの餅など、満腹のご馳走。" }
        ]
      },
      {
        day: "Day 2",
        date: "2026年8月23日（日）",
        spots: [
          { time: "08:00", title: "朝食", type: "food", note: "旅館で朝食。" },
          { time: "09:40", title: "出発", type: "start", note: "毛越寺へ。" },
          { time: "10:00", title: "毛越寺", type: "spot", note: "庭園を散策。" },
          { time: "11:00", title: "中尊寺", type: "spot", note: "本堂、金色堂ほかを参拝。" },
          { time: "13:55", title: "平泉駅", type: "train", note: "バスで移動。" },
          { time: "14:18", title: "一ノ関駅", type: "train", note: "バスで移動、14:43着。" },
          { time: "15:43", title: "東北新幹線 やまびこ62号", type: "train", note: "東京へ。" },
          { time: "18:24", title: "東京駅", type: "spot", note: "到着。" },
          { time: "18:43", title: "総武快速", type: "train", note: "市川へ。" },
          { time: "19:01", title: "市川駅", type: "spot", note: "シャポーで弁当を購入。" },
          { time: "19:30", title: "帰宅", type: "home", note: "旅の締めくくり。" }
        ]
      }
    ]
  },
  {
    id: "sendai2026",
    title: "仙台・松島旅行 2026",
    dates: "2026.03.29 - 03.30",
    location: "仙台・松島・秋保温泉",
    timeline: [
      {
        day: "Day 1",
        date: "2026年3月29日（日）",
        spots: [
          { time: "05:47", title: "矢切駅", type: "train", note: "出発。" },
          { time: "06:38", title: "上野駅", type: "train", note: "到着。" },
          { time: "08:03", title: "仙台駅", type: "spot", note: "仙台到着。" },
          { time: "08:55", title: "松島海岸駅", type: "spot", note: "松島観光スタート。" },
          { time: "09:30", title: "松島遊覧船", type: "spot", image: "images/matsushima_cruise.jpg", note: "09:30〜10:20、松島湾を遊覧。" },
          { time: "10:30", title: "おさかな市場", type: "food", image: "images/kaisendon.jpg", note: "海鮮丼と生牡蠣。" },
          { time: "11:20", title: "福浦橋・福浦島", type: "spot", image: "images/fukuurajima.jpg", note: "橋を渡って福浦島を散策。" },
          { time: "12:15", title: "瑞巌寺五大堂", type: "spot", note: "五大堂を見学。" },
          { time: "12:30", title: "瑞巌寺", type: "spot", image: "images/zuiganji.jpg", note: "瑞巌寺を参拝。" },
          { time: "13:15", title: "甘味処", type: "food", note: "アイスコーヒーで休憩。" },
          { time: "13:52", title: "松島海岸駅", type: "train", note: "仙台へ。" },
          { time: "14:29", title: "仙台駅", type: "spot", note: "到着。" },
          { time: "15:00", title: "仙台駅東口", type: "spot", note: "秋保温泉方面へ。" },
          { time: "15:50", title: "篝火の湯 緑水亭", type: "hotel", image: "images/ryokusuitei.jpg", note: "秋保温泉に宿泊。" }
        ]
      },
      {
        day: "Day 2",
        date: "2026年3月30日（月）",
        spots: [
          { time: "10:00", title: "チェックアウト", type: "hotel", note: "緑水亭を出発。" },
          { time: "10:10", title: "緑水亭", type: "train", note: "仙台方面へ。" },
          { time: "11:00", title: "仙台駅", type: "spot", note: "到着。" },
          { time: "11:20", title: "バス", type: "train", note: "瑞鳳殿へ。" },
          { time: "11:35", title: "瑞鳳殿", type: "spot", image: "images/zuihoden.jpg", note: "参拝。" },
          { time: "12:30", title: "仙台城跡", type: "spot", image: "images/sendai_castle.jpg", note: "青葉山から仙台市内を望む。" },
          { time: "13:30", title: "青葉山公園", type: "spot", note: "公園を散策。" },
          { time: "13:48", title: "定禅寺通り", type: "spot", image: "images/jozenji.jpg", note: "徒歩で移動、街歩き。" },
          { time: "15:00", title: "利休", type: "food", image: "images/rikyu_gyutan.jpg", note: "牛タン。" },
          { time: "15:30", title: "カラオケ招き猫", type: "spot", note: "カラオケ。" },
          { time: "16:45", title: "仙台駅", type: "spot", note: "お土産：萩の月、喜久水庵の喜久福 生クリーム大福。" },
          { time: "17:10", title: "新幹線", type: "train", note: "上野へ。" },
          { time: "18:38", title: "上野駅", type: "home", note: "到着。" }
        ]
      }
    ]
  }
];
