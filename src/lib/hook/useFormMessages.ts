import { useTranslations } from 'next-intl';

export const useFormMessages = () => {
  const t = useTranslations();

  return {
    messageFormTitle: t('messageFormTitle'),
    messageFormCity: t('messageFormCity'),
    messageFormDesc: t('messageFormDesc'),
    messageFormError: t('messageFormError'),
    messageFormDownloadError: t('messageFormDownloadError'),
    messageFormDeleteError: t('messageFormDeleteError'),
    itemUpdated: t('itemUpdated'),
    itemAdded: t('itemAdded'),
    nameOfTable: t('nameOfTable'),
    city: t('city'),
    descriptionOfForm: t('descriptionOfForm'),
    uploadedImage: t('uploadedImage'),
    loading: t('loading'),
    save: t('save'),
    send: t('send'),
    reset: t('reset'),
  };
};
