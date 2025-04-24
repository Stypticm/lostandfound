'use client';

import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

export default function InitTelegramClient() {
    useEffect(() => {
        try {
            WebApp.ready();
            WebApp.expand();
            console.log('Telegram WebApp user:', WebApp.initDataUnsafe.user);
        } catch (err) {
            console.warn('Telegram WebApp init error:', err);
        }
    }, []);

    return null;
}