const Learnsets = [
  {
    id: "0001",
    levels: [
      {
        level: 1,
        move: "0288", // ID of moves
      },
      {
        level: 1,
        move: "0720",
      },
      {
        level: 3,
        move: "0775",
      },
      {
        level: 6,
        move: "0289",
      },
      {
        level: 9,
        move: "0377",
      },
      {
        level: 12,
        move: "0552",
      },
      {
        level: 15,
        move: "0509",
      },
      {
        level: 15,
        move: "0637",
      },
      // so on...
    ],
    breeding: ["0135", "0497", "0752", "0353"], // moves ID which align to certain Moves
    machines: ["0001", "0004", "0043"], // items ID which align to certain TMs/TRs
  }
]

export default Learnsets;