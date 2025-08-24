import supabase from "./supabase";

export async function getPhotos() {
  const { data, error } = await supabase.storage.from('ganeshaPhotos').list();

  if (error) {
    console.error('error>>>>>>'+error);
    return null;
  }
   return data.map(file =>
    supabase.storage.from("ganeshaPhotos").getPublicUrl(file.name).data.publicUrl
  );
}