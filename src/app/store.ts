"use client";

import { createStore } from 'redux';

// 初始状态
const initialState = {
    alert: {
        show: false,
        typing: 'ok' as | 'ok' | 'error',
        title: '系统消息',
        message: '',
    },
};

export default createStore((state = initialState, action) => {
    switch (action.type) {
        // 显示
        case 'ALERT':
            return { alert: { ...action } };
        default:
            return state;
    }
});
