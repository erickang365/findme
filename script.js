function calculateResult() {
    const responses = [];
    for (let i = 1; i <= 10; i++) {
        const question = document.querySelector(`input[name="q${i}"]:checked`);
        if (question) {
            responses.push(question.value);
        } else {
            alert(`모든 질문에 답변해 주세요. (질문 ${i})`);
            return;
        }
    }

    const types = {
        "대장님 타입 (리더형)": 0,
        "파티왕 타입 (사교형)": 0,
        "호기심 천국 타입 (탐구형)": 0,
        "평화주의자 타입 (안정형)": 0,
        "예술가 타입 (창의형)": 0
    };

    const descriptions = {
        "대장님 타입 (리더형)": "리더십이 강하고 결단력이 있습니다. 장점: 책임감이 강하다. 단점: 때때로 고집이 세다.",
        "파티왕 타입 (사교형)": "사교적이고 활발합니다. 장점: 친구가 많고 인기가 많다. 단점: 가끔은 피곤할 수 있다.",
        "호기심 천국 타입 (탐구형)": "호기심이 많고 새로운 것을 탐구합니다. 장점: 창의적이고 독창적이다. 단점: 집중력이 부족할 수 있다.",
        "평화주의자 타입 (안정형)": "평화롭고 안정적입니다. 장점: 신뢰할 수 있고 성실하다. 단점: 변화에 대한 두려움이 있을 수 있다.",
        "예술가 타입 (창의형)": "창의적이고 예술적인 감각이 뛰어납니다. 장점: 감수성이 풍부하고 표현력이 뛰어나다. 단점: 감정 기복이 있을 수 있다."
    };

    const typeMapping = [
        {"a": "호기심 천국 타입 (탐구형)", "b": "평화주의자 타입 (안정형)", "c": "예술가 타입 (창의형)", "d": "호기심 천국 타입 (탐구형)", "e": "예술가 타입 (창의형)"},
        {"a": "파티왕 타입 (사교형)", "b": "평화주의자 타입 (안정형)", "c": "호기심 천국 타입 (탐구형)", "d": "예술가 타입 (창의형)", "e": "예술가 타입 (창의형)"},
        {"a": "평화주의자 타입 (안정형)", "b": "평화주의자 타입 (안정형)", "c": "대장님 타입 (리더형)", "d": "파티왕 타입 (사교형)", "e": "호기심 천국 타입 (탐구형)"},
        {"a": "평화주의자 타입 (안정형)", "b": "파티왕 타입 (사교형)", "c": "호기심 천국 타입 (탐구형)", "d": "예술가 타입 (창의형)", "e": "평화주의자 타입 (안정형)"},
        {"a": "대장님 타입 (리더형)", "b": "대장님 타입 (리더형)", "c": "호기심 천국 타입 (탐구형)", "d": "파티왕 타입 (사교형)", "e": "평화주의자 타입 (안정형)"},
        {"a": "대장님 타입 (리더형)", "b": "평화주의자 타입 (안정형)", "c": "호기심 천국 타입 (탐구형)", "d": "평화주의자 타입 (안정형)", "e": "파티왕 타입 (사교형)"},
        {"a": "대장님 타입 (리더형)", "b": "파티왕 타입 (사교형)", "c": "호기심 천국 타입 (탐구형)", "d": "평화주의자 타입 (안정형)", "e": "후원자 타입 (안정형)"},
        {"a": "예술가 타입 (창의형)", "b": "평화주의자 타입 (안정형)", "c": "호기심 천국 타입 (탐구형)", "d": "대장님 타입 (리더형)", "e": "파티왕 타입 (사교형)"},
        {"a": "대장님 타입 (리더형)", "b": "평화주의자 타입 (안정형)", "c": "호기심 천국 타입 (탐구형)", "d": "예술가 타입 (창의형)", "e": "관찰자 타입 (탐구형)"},
        {"a": "대장님 타입 (리더형)", "b": "평화주의자 타입 (안정형)", "c": "예술가 타입 (창의형)", "d": "호기심 천국 타입 (탐구형)", "e": "파티왕 타입 (사교형)"}
    ];

    for (let i = 0; i < responses.length; i++) {
        const userType = typeMapping[i][responses[i]];
        types[userType]++;
    }

    const userType = Object.keys(types).reduce((a, b) => types[a] > types[b] ? a : b);
    document.getElementById("survey-form").style.display = "none";
    const resultDiv = document.getElementById("result");
    document.getElementById("result-text").innerText = `당신은 ${userType}입니다.`;
    document.getElementById("result-description").innerText = descriptions[userType];
    resultDiv.style.display = "block";
}
