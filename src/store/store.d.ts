type TStore = {
  haveRunes: { [key in RuneId]?: boolean };
  pinned: Set<RunewordId>;
};

// user data as stored in browser's localStorage
type TUserData = {
  selectedRunes: RuneId[];
  pinnedRunewords: RunewordId[];
};
