const teste = [
  {
    id: "low",
    title: "Andar mais baixo",
    icon: "$photo_library_rounded",
    disabled: false,
    selected: true,
  },
  {
    id: "high",
    title: "Andar mais alto",
    icon: "$photo_library_rounded",
    disabled: false,
    selected: false,
  },
];

const selectFloorPreference = (field) => {
  const selectedCount = teste.filter((key) => key.selected).length
  teste.forEach((key) => {
    if (key.id === field.id) {
      key.selected = !key.selected
    } else {
      key.disabled = true
      key.selected = false
    }

    
    if (selectedCount > 0) {
      key.disabled = false
    }
  })

  // const selectedCOunt = teste.filter((item) => item.selected).length;
  console.log(teste);
}

const local = {
  id: "high",
  title: "Andar mais alto",
  icon: "$photo_library_rounded",
  disabled: false,
  selected: false,
};

selectFloorPreference(local);