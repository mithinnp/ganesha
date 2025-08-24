import { getPhotos } from "../services/photos";
import { useEffect, useState } from "react";
import supabase from "../services/supabase";
import { ToastContainer, toast } from 'react-toastify';
import Photos from "./photos/Photo";
function Upload() { 

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUrl,setCurrentUrl]= useState(null);
  useEffect(()=>{
    const fetchImages = async () => {
      try {
        setLoading(true);
        const data = await getPhotos();
        
        if (data === null) {
          setError("Failed to fetch photos");
          return;
        }
        
        if (data && data.length > 0) {
          setPhotos(data);
          console.log("Fetched photos:", data);
        } else {
          console.log("No photos found in storage");
        }
      } catch (err) {
        console.error("Error fetching photos:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  },[]);

async function handleFileChange(event) {debugger;
  const notify = () => toast("File Uploaded");
  const file = event.target.files[0];
  if (!file) return;

  const filePath = `${Date.now()}_${file.name}`;

  const { data, error } = await supabase.storage
    .from('ganeshaPhotos')
    .upload(filePath, file);

  if (error) {
    toast.error('Upload error:', error);
  } else {
    const { data: urlData } = supabase.storage.from('ganeshaPhotos').getPublicUrl(filePath);
  const publicUrl = urlData.publicUrl;

  // Add the new image URL to your existing images array in state
  setPhotos(prevImages => [publicUrl, ...prevImages]);
    toast.success("Photo upload successfully")
  }
}


  return (
    <div className="bg-linear-to-r from-slate-800 to-slate-300 ">
      <div className="bg-red-500 text-x flex justify-center ">Upload the photos</div>
       <input type="file" accept="image/*" onChange={handleFileChange} capture="environment"  className="bg-red-300 mt-4"/>
      {loading && <div className="text-center p-4">Loading photos...</div>}
      {error && <div className="text-center p-4 text-red-600">Error: {error}</div>}
      {!loading && !error && photos.length === 0 && (
        <div className="text-center p-4">No photos found in storage</div>
      )}
      {!loading && !error && photos.length > 0 && (
        <div className="text-center p-4 ">
          <p>Found {photos.length} photos in storage</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {photos.map((photo, index) => (
             <img src={photo} key={photo} onClick={()=>setCurrentUrl(photo)} className="w-full h-50 sm:h-60 "/>
            ))}
          </div>
          {currentUrl && <Photos url={currentUrl}/>}
          <ToastContainer/>
        </div>
      )}

      
    </div>
  );
}

export default Upload;
