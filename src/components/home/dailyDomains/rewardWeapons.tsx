type Props = {
  isLg: boolean;
};

export default function RewardWeapons({ isLg }: Readonly<Props>) {
  return (
    <div
      className={`flex w-full flex-row flex-wrap items-center justify-center gap-2 overflow-x-auto ${
        isLg ? "justify-start" : "justify-center"
      }`}
    >
      {/* {useRewardUsers(rewards, selectedTraveller).map((user) => (
                <MiniAvatar
                  key={user.id + user.element}
                  char={{
                    id: user.id.toString(),
                    icon: user.iconUrl,
                    element: user.element,
                    rarity: user.rarity
                  }}
                />
              ))} */}
    </div>
  );
}
