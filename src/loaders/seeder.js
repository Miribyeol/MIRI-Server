const Challenge = require("../models/challenge");
const Emotion = require("../models/emotion");
const Post = require("../models/post");

const challengeData = async () => {
    await Challenge.bulkCreate(
        [
            {
                id: 0,
                title: "챌린지 시작",
                content: "챌린지를 시작해 주세요.",
            },
            {
                id: 1,
                title: "친구나 가족과의 만남",
                content:
                    "사랑하는 사람들과 함께 시간을 보내면 우울감을 완화시킬 수 있습니다. 커피를 마시거나 산책을 함께 하며 대화하는 것도 좋은 방법입니다.",
                image: "https://drive.google.com/uc?id=18vHsJgZTr6Bw802Dlz2HDOIBDkEIpteW",
            },
            {
                id: 2,
                title: "물 마시기",
                content:
                    "시원한 물을 마시면 우울감을 완화시키고 긴장을 풀 수 있습니다.",
                image: "https://drive.google.com/uc?id=1jIBOdHXRYudjJ7AFXkhf1DCjFz2GO1Yu",
            },
            {
                id: 3,
                title: "명상 및 호흡 운동",
                content:
                    "명상이나 깊은 호흡 운동은 스트레스를 해소하고 정신을 집중시키는 데 도움을 줄 수 있습니다. 조용한 장소에서 몇 분 동안 집중하여 명상을 실천해보세요.",
                image: "https://drive.google.com/uc?id=1n0SqMP5L3H7DOy5xPHYWi0LFFasS3S7K",
            },
            {
                id: 4,
                title: "음악 감상",
                content:
                    "좋아하는 음악을 듣고 감상해보세요. 음악은 감정을 표현하고 치유하는 데 큰 도움이 될 수 있습니다.",
                image: "https://drive.google.com/uc?id=19pElDTlAcNEa9CwX_BUXqNgTOhjKDrXQ",
            },
            {
                id: 5,
                title: "자기 사랑 연습",
                content:
                    '거울을 보면서 자신에게 "나를 사랑합니다"라고 말해보세요. 자기 자신을 받아들이고 사랑하는 것은 펫로스 증후군 극복에 중요한 부분입니다.',
                image: "https://drive.google.com/uc?id=1vDRIL1IJA_k4NspgBHgB_WqRUtGTIDRf",
            },
            {
                id: 6,
                title: "긍정적인 인용구 모으기",
                content:
                    "긍정적인 인용구를 찾아 모아보세요. 이를 읽으면서 긍정적인 생각과 에너지를 얻을 수 있습니다.",
                image: "https://drive.google.com/uc?id=1ZLZYZYK2QW2x_cYFsv4wAOLeaknGTlDN",
            },
            {
                id: 7,
                title: "자기 선물",
                content:
                    "자신을 위한 작은 선물을 준비하세요. 좋아하는 디저트, 영화 시청, 스파 트리트먼트 등을 선택할 수 있습니다. 자기 자신에 대한 관심과 사랑을 나타내는 작은 행위입니다.",
                image: "https://drive.google.com/uc?id=1kc_vzVGkrJyQYKW5WOzbBmG__d9qVZFn",
            },
            {
                id: 8,
                title: "봉사 활동",
                content:
                    "다른 사람들을 도우며 자신의 기분을 개선하세요. 자원봉사 활동이나 가까운 이웃을 돕는 일 등의 방법을 고려해보세요.",
                image: "https://drive.google.com/uc?id=1UGeP09ltRkSQMraBFYZNVn91ZW5DpHZQ",
            },
            {
                id: 9,
                title: "웃음 요법",
                content:
                    "웃음 요법을 실천해보세요. 코미디 영화나 유머 쇼를 시청하거나 웃긴 이야기를 읽어보세요. 웃음은 스트레스를 완화하고 긍정적인 기분을 불러일으킬 수 있습니다.",
                image: "https://drive.google.com/uc?id=1K30VWNjfROnaEIiFyjavSaZTNubeLw9i",
            },
            {
                id: 10,
                title: "사진 도전",
                content:
                    "주제를 정하고 그에 맞는 사진을 찍어보세요. 사진은 순간을 기록하고 창의성을 자극하는데 도움이 됩니다.",
                image: "https://drive.google.com/uc?id=1Bgbjq6D6YvMB_4m3dxgqrVLyF5n1t50U",
            },
            {
                id: 11,
                title: "자연 치유",
                content:
                    "자연 속에서 힐링을 경험해보세요. 숲산책, 해변산책, 정원 가꾸기 등 자연에 접근하면서 치유와 평온을 찾아보세요.",
                image: "https://drive.google.com/uc?id=1Cu1PANKRPd-3b18t-VRDNgMGiMgHPRra",
            },
            {
                id: 12,
                title: "일기 쓰기",
                content:
                    "일기를 쓰면서 감정을 표현하고 내면의 갈등을 기록해보세요. 일기 쓰기는 정신적인 부담을 줄이고, 자신을 이해하는 데 도움을 줄 수 있습니다.",
                image: "https://drive.google.com/uc?id=1j5QQ9I8x_gnI3HBTDn7J073Eh9cWI2QJ",
            },
            {
                id: 13,
                title: "책 읽기",
                content:
                    "자기계발서나 긍정적인 영향을 주는 소설을 읽어보세요. 독서는 마음을 안정시키고 새로운 아이디어를 제공할 수 있습니다.",
                image: "https://drive.google.com/uc?id=1E9BMgR9Z-eFXzoR2FEJthJf6OTkwHzji",
            },
            {
                id: 14,
                title: "새로운 취미 시작",
                content:
                    "새로운 취미를 찾아보고 도전해보세요. 그림 그리기, 음악 연주, 요리, 정원 가꾸기 등 다양한 옵션이 있을 수 있습니다. 자기계발을 위해 도전해보는 것도 좋습니다.",
                image: "https://drive.google.com/uc?id=1AaFmD4K35ZsX_jn_UtmYejvJtQBrpGyO",
            },
        ],
        { updateOnDuplicate: ["id"] }
    );
};

const emotionData = async () => {
    await Emotion.bulkCreate(
        [
            { emotion: "기분전환", count: 0 },
            { emotion: "희망찬", count: 0 },
            { emotion: "보람찬", count: 0 },
            { emotion: "우울한", count: 0 },
            { emotion: "드라이브 가고 싶은", count: 0 },
            { emotion: "미련", count: 0 },
            { emotion: "아직 잘 모르겠어요", count: 0 },
            { emotion: "울고 싶은", count: 0 },
            { emotion: "어제보다 나은", count: 0 },
            { emotion: "무력한", count: 0 },
            { emotion: "떠나고 싶은", count: 0 },
            { emotion: "후회스러운", count: 0 },
            { emotion: "두려운", count: 0 },
            { emotion: "불면증", count: 0 },
        ],
        { updateOnDuplicate: ["emotion"] }
    );
};

const postData = async () => {
    await Post.bulkCreate(
        [
            {
                id: 1,
                title: "우리 함께한 소중한 순간들",
                content: "소중한 순간들은 영원히 기억됩니다.",
                author: "김규동",
            },
            {
                id: 2,
                title: "이별의 아픔을 나누는 글",
                content:
                    "이별의 아픔을 나누며 힘을 내는 건 언제나 도움이 돼요.",
                author: "김규동",
            },
            {
                id: 3,
                title: "사랑하는 친구에게 전하는 말",
                content: "당신은 특별하고 영원한 존재로 우리 마음 속에 있어요.",
                author: "김규동",
            },
        ],
        { updateOnDuplicate: ["id"] }
    );
};

module.exports = { challengeData, emotionData, postData };
