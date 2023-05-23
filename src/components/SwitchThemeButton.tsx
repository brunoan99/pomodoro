export const SwitchThemeButton = ({ onClick }: { onClick: () => void }) => (
  <>
    <button className="h-4/6 p-2 self-center border rounded-2xl border-slate-500"
      onClick={onClick}
    >
      <p className="text-primary-font-color">Switch Theme</p>
    </button>
  </>
)
