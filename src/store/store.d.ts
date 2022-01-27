type TStore = {
  haveRunes: { [key in RuneId]?: boolean };
};

type TUserData = {
  selectedRunes: RuneId[];
};
