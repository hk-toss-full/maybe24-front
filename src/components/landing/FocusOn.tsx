const FocusOn = () => {
  return (
    <div className="bg-black h-[560px] flex justify-between">
      <div className="flex justify-center items-center flex-grow text-white ">
        <div>
          <h1 className="text-[36px] font-semibold leading-[60px]">
            FOCUS{" "}
            <span className="inline-block pb-1 mb-10 border-b-4 border-[#ec7d2c]">
              ON
            </span>
          </h1>
          <h2 className="text-[52px] font-extrabold leading-[60px]">
            뮤지컬
            <br />
            알라딘
          </h2>
          <p className="mt-5">
            브로드웨이의 거대한 스펙타큘라
            <br />
            완전히 새로운 세상이 온다!
          </p>
        </div>
      </div>
      <iframe
        width="981"
        height="560"
        src="https://www.youtube.com/embed/k8F4s2Ie5xU"
        title="[뮤지컬 알라딘] 2024 알라딘 한국 초연 매직 캐스트 스팟 영상 공개!"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default FocusOn;
