import { getSession } from '@/app/api/user.api';
import { UserDTO } from '@/app/dto/user.dto';
import { vercelAdapter } from '@flags-sdk/vercel';
import { flag } from 'flags/next';
import { FlagEnum } from '@/app/keyFlag/key.flag';

const defaultValue = false;

const identify = async (): Promise<UserDTO> => {
  const session = await getSession();
  return {
    user: session.user,
  };
};

const handleSession = async () => {
  const resUser = await getSession();
  if (resUser?.user === null) return false;
  return true;
}

export const marketingBanner = flag({
  /** key */
  // Tên flag trên Vercel
  // Phải match 100% với dashboard
  key: FlagEnum.MARKETING_BANNER,
  /** adapter */
  //Kết nối tới provide vercel
  adapter: vercelAdapter(),
  /** defaultValue */
  //Không connect được Vercel
  //Flag chưa tồn tại
  //Lỗi runtime
  defaultValue: defaultValue,
  /** decide */
  // Cho phép bạn override logic flag trước khi gọi adapter
  decide: handleSession,
  /** identify */
  //Dùng để gửi context (user, team, org…) lên Vercel
  //Đây là thứ quyết định rule có match hay không
  identify,
});