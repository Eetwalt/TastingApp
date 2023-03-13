window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('Hey now!');
  const form = document.querySelector<HTMLFormElement>('[fs-element="form"]');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData(form);
    const taste = formData.get('taste');
    const smell = formData.get('smell');
    const look = formData.get('look');
    const presentation = formData.get('presentation');
    const rebuyfactor = formData.get('rebuyfactor');

    const total =
      Number(taste) + Number(smell) + Number(look) + Number(presentation) + Number(rebuyfactor);

    const totalAverage = total / 5;

    console.log({ total, totalAverage });
  });
});
