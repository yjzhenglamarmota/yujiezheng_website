---
widget: blank
headless: true
active: true
weight: 55

title: 'Research areas'
subtitle: ''

design:
  columns: '1'
  spacing:
    padding: ['70px', '0', '90px', '0']
---

<div class="research-carousel" data-research-carousel aria-roledescription="carousel" aria-label="Research areas">
  <div class="research-carousel__viewport" aria-live="polite">
    <article class="research-slide is-active" data-research-slide aria-hidden="false">
      <div class="research-slide__image-wrap">
        <img class="research-slide__image" src="/project/water/featured.jpg" alt="Mountain lake and surrounding watershed in Cuzco, Peru">
      </div>
      <div class="research-slide__content">
        <p class="research-slide__eyebrow">Water resources and sustainability</p>
        <h3>Groundwater and coupled water-land systems</h3>
        <p>Groundwater systems record both climatic forcing and human water use. I combine multidecadal InSAR records with seismic observations, pumping data, and groundwater models to resolve how storage changes through drought, recharge, and extraction.</p>
        <p>Current projects examine groundwater recovery in Greater Los Angeles, irrigation and soil moisture in the High Plains, and freshwater-brine interactions affected by lithium extraction in the Salar de Atacama.</p>
        <a class="research-slide__link" href="/project/water/">Explore this research area <span aria-hidden="true">&#8594;</span></a>
      </div>
    </article>
    <article class="research-slide" data-research-slide aria-hidden="true">
      <div class="research-slide__image-wrap">
        <img class="research-slide__image" src="/project/insar/featured.jpg" alt="Radar satellite observing Earth from orbit">
      </div>
      <div class="research-slide__content">
        <p class="research-slide__eyebrow">Methods and observations</p>
        <h3>Radar geophysics and new observables</h3>
        <p>Satellite radar provides frequent, global observations of Earth's surface. My work develops the theory and algorithms needed to interpret those measurements reliably, especially where soil moisture, vegetation, or surface structure complicates conventional interferometry.</p>
        <p>I develop physics-based models for decorrelation and closure phase, then use those signals to improve deformation time series and retrieve information about soil moisture, irrigation, and near-surface change.</p>
        <a class="research-slide__link" href="/project/insar/">Explore this research area <span aria-hidden="true">&#8594;</span></a>
      </div>
    </article>
    <article class="research-slide" data-research-slide aria-hidden="true">
      <div class="research-slide__image-wrap">
        <img class="research-slide__image" src="/project/tectonics/featured.jpg" alt="Illustration of volcanic processes beneath a volcano">
      </div>
      <div class="research-slide__content">
        <p class="research-slide__eyebrow">Natural processes and geohazards</p>
        <h3>Solid Earth processes</h3>
        <p>I integrate InSAR with GNSS, seismic tremor, and geological constraints to investigate volcanic and tectonic systems. Physical and inverse models help estimate hidden subsurface properties, quantify uncertainty, and test competing explanations for crustal deformation.</p>
        <p>Current work focuses on the spatial distribution of slow slip in Cascadia and builds on studies of magma-reservoir and fault interactions at Sierra Negra and Kilauea volcanoes.</p>
        <a class="research-slide__link" href="/project/tectonics/">Explore this research area <span aria-hidden="true">&#8594;</span></a>
      </div>
    </article>
  </div>
  <button class="research-carousel__arrow research-carousel__arrow--previous" type="button" data-research-previous aria-label="Show previous research area">&#8249;</button>
  <button class="research-carousel__arrow research-carousel__arrow--next" type="button" data-research-next aria-label="Show next research area">&#8250;</button>
  <div class="research-carousel__dots" role="tablist" aria-label="Choose a research area">
    <button class="research-carousel__dot is-active" type="button" role="tab" data-research-dot aria-selected="true" aria-label="Show groundwater research"></button>
    <button class="research-carousel__dot" type="button" role="tab" data-research-dot aria-selected="false" aria-label="Show radar geophysics research"></button>
    <button class="research-carousel__dot" type="button" role="tab" data-research-dot aria-selected="false" aria-label="Show solid Earth research"></button>
  </div>
</div>
<style>
.research-carousel { position: relative; max-width: 1180px; margin: 0 auto; padding: 0 54px 42px; }
.research-slide { display: none; grid-template-columns: minmax(0, 1.04fr) minmax(320px, .96fr); align-items: center; gap: clamp(42px, 6vw, 84px); min-height: 520px; }
.research-slide.is-active { display: grid; animation: research-fade-in 320ms ease both; }
.research-slide__image-wrap { overflow: hidden; background: #f1f2f2; aspect-ratio: 4 / 3; }
.research-slide__image { display: block; width: 100%; height: 100%; object-fit: cover; }
.research-slide:first-child .research-slide__image { object-position: center 58%; }
.research-slide__content { max-width: 520px; }
.research-slide__eyebrow { margin: 0 0 12px; color: #67747c; font-size: .78rem; font-weight: 600; letter-spacing: .13em; text-transform: uppercase; }
.research-slide__content h3 { margin: 0 0 22px; font-size: clamp(1.65rem, 3vw, 2.35rem); line-height: 1.16; }
.research-slide__content p:not(.research-slide__eyebrow) { margin-bottom: 17px; font-size: 1rem; line-height: 1.72; }
.research-slide__link { display: inline-block; margin-top: 10px; border-bottom: 1px solid currentColor; color: inherit; font-size: .92rem; font-weight: 600; text-decoration: none; }
.research-slide__link:hover, .research-slide__link:focus { color: #1565c0; text-decoration: none; }
.research-carousel__arrow { position: absolute; top: 47%; width: 44px; height: 56px; transform: translateY(-50%); border: 0; background: transparent; color: currentColor; font-family: Arial, sans-serif; font-size: 3rem; font-weight: 200; line-height: 1; cursor: pointer; opacity: .78; }
.research-carousel__arrow:hover, .research-carousel__arrow:focus { opacity: 1; }
.research-carousel__arrow--previous { left: 0; }
.research-carousel__arrow--next { right: 0; }
.research-carousel__dots { display: flex; justify-content: center; gap: 14px; margin-top: 30px; }
.research-carousel__dot { width: 9px; height: 9px; padding: 0; border: 1px solid currentColor; border-radius: 50%; background: transparent; cursor: pointer; }
.research-carousel__dot.is-active { background: currentColor; }
@keyframes research-fade-in { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
@media (max-width: 767px) {
  .research-carousel { padding: 0 8px 34px; }
  .research-slide, .research-slide.is-active { grid-template-columns: 1fr; gap: 30px; min-height: 0; }
  .research-slide__image-wrap { aspect-ratio: 16 / 11; }
  .research-slide__content { max-width: none; padding: 0 26px; }
  .research-carousel__arrow { top: 24%; width: 34px; color: #fff; text-shadow: 0 1px 5px rgba(0,0,0,.65); }
  .research-carousel__arrow--previous { left: 8px; }
  .research-carousel__arrow--next { right: 8px; }
}
@media (prefers-reduced-motion: reduce) { .research-slide.is-active { animation: none; } }
</style>
