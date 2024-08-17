<template>
  <div id="about-us" class="bg-slate-100 about">
    <UContainer>
      <div
        class="flex justify-between items-center flex-wrap-reverse lg:flex-wrap"
      >
        <picture data-aos="fade-left" class="w-full md:w-2/5">
          <img src="/about.jpg" alt="About us" />
        </picture>
        <div data-aos="fade-right" class="w-full md:w-1/2 text mb-5">
          <UBadge color="indigo" variant="soft" size="lg">من نحن</UBadge>
          <h4 class="my-4">هنا تستطيع وضع اي نص عبارة عن مقدم</h4>
          <p class="text-slate-400">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا
            كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
            الفقرات كما تريد،
          </p>
        </div>
      </div>
    </UContainer>
  </div>
</template>
<style lang="scss">
.about {
  picture {
    cursor: pointer;
    transition: 1s;
    &:hover {
      transform: scale(1.05);
    }
    img {
      filter: drop-shadow(13px 20px 10px #bdbcbc);
      box-shadow: 20px 20px 0 10px #e3e3e3;
      border-radius: 10px;
      height: 370px;
    }
  }
  .text {
    h4 {
      font-size: 40px;
      font-weight: bold;
      letter-spacing: 2px;
    }
    p {
      line-height: 2;
      margin-right: 20px;
      letter-spacing: 1px;
      font-size: 14px;
    }
  }
}
</style>
