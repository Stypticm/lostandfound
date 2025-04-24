import { supabase } from '@/lib/supabase';
import { v4 as uuidv4 } from 'uuid';

export const uploadImageToSupabase = async (file: File, type: 'lost' | 'found') => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${uuidv4()}.${fileExt}`;
  const filePath = `${type}/${fileName}`;

  const { error } = await supabase.storage.from('items').upload(filePath, file);

  if (error) {
    throw new Error(error.message);
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from('items').getPublicUrl(filePath);

  return publicUrl;
};
