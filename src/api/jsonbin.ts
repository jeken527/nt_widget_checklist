// 🌟 Vite에서는 import.meta.env 를 통해 숨겨둔 .env 환경 변수를 꺼내옵니다!
const JSONBIN_MASTER_KEY = import.meta.env.VITE_JSONBIN_MASTER_KEY;
const BIN_ID = import.meta.env.VITE_JSONBIN_BIN_ID;

// JSONBin API 기본 주소
const BASE_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

/**
 * 📥 JSONBin에서 데이터를 불러오는 함수
 */
export const fetchRoutineData = async () => {
    try {
        const response = await fetch(BASE_URL, {
            method: "GET",
            headers: {
                "X-Master-Key": JSONBIN_MASTER_KEY,
            },
        });
        
        if (!response.ok) throw new Error("데이터를 불러오는데 실패했습니다.");
        
        const result = await response.json();
        // JSONBin은 실제 데이터를 result.record 안에 담아서 줍니다.
        return result.record; 
    } catch (error) {
        console.error("JSONBin Fetch Error:", error);
        return null;
    }
};

/**
 * 📤 JSONBin에 새로운 데이터를 덮어쓰기(저장)하는 함수
 * @param data 저장할 체크리스트 배열이나 트래커 데이터 객체
 */
export const saveRoutineData = async (data: any) => {
    try {
        const response = await fetch(BASE_URL, {
            method: "PUT", // 기존 바구니 내용을 새 내용으로 교체
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": JSONBIN_MASTER_KEY,
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error("데이터를 저장하는데 실패했습니다.");
        
        const result = await response.json();
        console.log("✅ 데이터 저장 성공!", result);
        return true;
    } catch (error) {
        console.error("JSONBin Save Error:", error);
        return false;
    }
};
