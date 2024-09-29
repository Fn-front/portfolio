import { Gap, Justify } from "@/functions/types/flex";
import { Margin } from "@/functions/types/margin";

export const FlexWrapper = ({
  children,
  gap,
  justify,
  mt
}: Readonly<{
  children: React.ReactNode;
  gap: Gap;
  justify: Justify;
  mt?: Margin
}>) => {

  return (
    <>
      <div className={`l_flex_wrapper ${'l_flex_wrapper_gap' + gap} ${'l_flex_wrapper_justify' + justify} ${mt ? 'u_mt' + mt : ''}`}>
        {children}
      </div>
    </>
  );
};

export default FlexWrapper;
