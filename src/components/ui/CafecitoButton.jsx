import posthog from "posthog-js";

export function CafecitoButton() {
  return (
    <a href="https://cafecito.app/utn-ingreso" rel="noopener" target="_blank" onClick={() => posthog.capture("Cafecito Button Clicked")}>
      <img
        srcSet="https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x"
        src="https://cdn.cafecito.app/imgs/buttons/button_5.png"
        alt="Invitame un café en cafecito.app"
      />
    </a>
  );
}
