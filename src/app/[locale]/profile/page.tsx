'use client';

import React, { use, useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';
import { useTranslations } from 'next-intl';

const Profile = () => {
  const t = useTranslations();
  const [userInfo, setUserInfo] = useState<{
    id?: number;
    username?: string;
  }>({});


  useEffect(() => {
    try {
      const user = WebApp.initDataUnsafe.user;
      if (user) {
        setUserInfo({
          id: user.id,
          username: user.username || 'No username',
        });
      }
    } catch (err) {
      console.warn('Telegram user not available', err);
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">{t('myAds')}</h1>
      <div className="text-base">
        <p><strong>Your Telegram ID:</strong> {userInfo.id}</p>
        <p><strong>Your Username:</strong> @{userInfo.username}</p>
      </div>
    </div>
  );
};

export default Profile;
