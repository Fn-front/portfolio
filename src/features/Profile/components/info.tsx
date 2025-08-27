'use client'

import Image from 'next/image';
import ImageProfile from '@/public/assets/img/profile.png'
import ImageGithub from '@/public/assets/icons/github-mark-white.svg'
// import HeadLine from '@/components/Ui/HeadLine';

export const ProfileInfo = () => {
  return (
    <>
      <h1 className='c_h2'>Profile</h1>
      <div className='c_profile_info u_mt24'>
        <p className='c_profile_text_small'>2018年に新卒でWeb制作会社に入社。</p>
        <p className='c_profile_text_small'>2023年からWebアプリケーションのフロントエンドエンジニアとして携わっております。</p>
        <div className='c_profile_info_block u_mt40'>
          <div>
            <div className='c_profile_info_block_about'>
              <h2 className='c_h3'>name</h2>
              <p className='u_mt16'><ruby>福見<rt>Fukumi</rt></ruby> <ruby>直人<rt>Naoto</rt></ruby></p>
              <h2 className='c_h3 u_mt36'>Location</h2>
              <p className='u_mt16'>Nishitokyo City, Tokyo</p>
              <h2 className='c_h3 u_mt36'>Business</h2>
              <div className='u_mt16'>
                <p>Web制作（HTML・CSS・JavaScript・レスポンシブ対応・CMS実装）</p>
                <p className='u_mt4'>Webアプリケーション（機能要件・詳細設計・開発・運用）</p>
              </div>
              <h2 className='c_h3 u_mt36'>URL</h2>
              <p className='c_profile_link_column u_mt16'>
                <span className='c_profile_icon_github'>
                  <Image src={ImageGithub} alt='プロフィール画像' priority />
                </span>
                <a
                  href='https://github.com/Fn-front'
                  target='blank'
                  rel='noopener noreferrer'
                  className='c_profile_link_item'
                >
                  Fn-front
                </a>
              </p>
            </div>
          </div>
          <div className='c_profile_info_block_image'>
            <Image src={ImageProfile} alt='プロフィール画像' priority />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileInfo