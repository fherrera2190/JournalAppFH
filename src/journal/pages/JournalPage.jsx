import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../view";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio minima
        dignissimos atque culpa cumque rerum quae. Rem sit labore dignissimos
        nisi voluptas. Veritatis commodi quae sunt velit expedita, eos quod!
      </Typography> */}
      <NothingSelectedView></NothingSelectedView>
    </JournalLayout>
  );
};
