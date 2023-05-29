import React from "react";

const Profile = () => {
  return (
    <div class="container">
      <div class="block block-user">
        <div class="block-header">
          <span class="block-header__title">User</span>
        </div>
        <div class="block-container">
          <div class="user-avatar">
            <img
              class="user-avatar__img"
              src="https://sh71-ryazan-r62.gosweb.gosuslugi.ru/netcat_files/9/67/1649232769_58_vsegda_pomnim_com_p_pustoe_litso_foto_76.jpg"
              alt=""
            />
          </div>
          <div class="user-description">
            <div class="description-line">
              <span class="user-description__user-name">Denis Nikotin</span>
            </div>
            <div class="description-line">
              <span class="user-description__user-age">22 years old</span>
            </div>
          </div>
        </div>
      </div>
      <div class="block block-other">
        <div class="block-header">
          <span class="block-header__title">Other</span>
        </div>
        <div class="block-container"></div>
      </div>
      <div class="block block-news">
        <div class="block-header">
          <span class="block-header__title">News</span>
        </div>
        <div class="block-container"></div>
      </div>
    </div>
  );
};

export default Profile;
