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
        <p className='c_profile_text_small'>メディアサイト開発においてレガシーシステムからモダンフロントエンド技術への移管プロジェクトを担当し、Vue.jsやwebpackを活用したSPA開発やコンポーネント設計の経験を積みました。</p><br />
        <p className='c_profile_text_small'>2023年からWebアプリケーションのフロントエンドエンジニアとして携わっております。</p>
        <p className='c_profile_text_small'>既存AIサービスの全面的なリファクタリングや、生成AIを活用したWebアプリケーションの開発をフロントリードとして担当し、要件定義から環境構築まで幅広く関わっています。<br /><br />
          MUIからRadix UIへの移行、Storybookの整備など、開発効率と保守性を重視した実装を得意としています。
          常に最新技術のキャッチアップを心がけ、開発環境の整備やコード品質の向上に注力し、チーム全体の生産性向上に貢献することを重視して取り組んでいます。</p>
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