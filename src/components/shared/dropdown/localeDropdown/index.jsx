import Dropdown from "..";
import { DEFAULT_LOCALE, LOCALE_OPTIONS } from "./localeDropdown.constants";

function LocaleDropdown() {
  return (
    <>
      <Dropdown options={LOCALE_OPTIONS} selected={DEFAULT_LOCALE} />
    </>
  );
}
export default LocaleDropdown;
