import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'src/styles/main/home/MainAd.scss';

import { Link } from 'react-router-dom';
import ChangeAdModal from 'src/components/main/home/image-modal/MainAdModal';

interface Props {
  session: any;
  auth: any;
}

function MainAd({ session, auth }: Props) {
  const [image, setImage] = useState('');
  useEffect(() => {
    axios.get(`/app/banner/static`).then((res) => {
      setImage(res.data.result.webImageUrl);
    });
  }, []);
  const [changeAd, setChangeAd] = useState(false);

  return (
    <div className="main-ad-flex">
      <ChangeAdModal
        TF={true}
        //      num={num}
        //        setNum={setNum}
        //          resize={resize}
        imageModalShow={changeAd}
        setImageModalShowF={setChangeAd}
        imageData={image}
        //            setImageDataF={setBannerImage}
      />
      <div className="main-ad">
        <>
          {auth.accountId === 31 ? (
            <div
              className="main-ad-inner"
              onClick={() => setChangeAd((prev) => !prev)}
            >
              <img src={image} alt="" />
            </div>
          ) : (
            <Link to="/Cake">
              <img src={image} alt="" />
            </Link>
          )}
        </>

        {/* <img className="main-ad-img" src={image} alt="advertise image"/> */}
      </div>
    </div>
  );
}

export default MainAd;
