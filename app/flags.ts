import { getSession } from '@/app/api/user.api';
import { UserDTO } from '@/app/dto/user.dto';
import { vercelAdapter } from '@flags-sdk/vercel';
import { flag } from 'flags/next';
import { FlagEnum } from '@/app/keyFlag/key.flag';
import { DemoJsonFlagValue } from '@/app/dto/demoJsonFlagValue.dto';

const defaultValue = false;

const identify = async (): Promise<UserDTO> => {
  const session = await getSession();
  return {
    user: session.user,
  };
};

export const demoShowUIFlag = flag({
  key: FlagEnum.DEMO_SHOW_BOOLEAN,
  adapter: vercelAdapter(),
  defaultValue: defaultValue,
  identify,
});


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
  /** identify */
  //Dùng để gửi context (user, team, org…) lên Vercel
  //Đây là thứ quyết định rule có match hay không
  identify,
});


export const demoStringFlag = flag<string, UserDTO>({
  key: FlagEnum.DEMO_STRING_FLAG,
  adapter: vercelAdapter(),
  defaultValue: 'develop',
  options: [{ value: 'develop', label: 'develop' }],
  identify,
});

export const demoNumberFlag = flag<string, UserDTO>({
  key: FlagEnum.DEMO_NUMBER_FLAG,
  adapter: vercelAdapter(),
  defaultValue: '1111',
  options: [{ value: '1111', label: 'id' }],
  identify,
});

export const demoJsonFlag = flag<DemoJsonFlagValue, UserDTO>({
  key: FlagEnum.DEMO_JSON_FLAG,
  adapter: vercelAdapter(),
  defaultValue: {
    id: '1',
    name: 'Hung',
    phone: '0342789876',
  },
  options: [
    {
      label: 'Variant 1',
      value: {
        id: '1',
        name: 'Hung',
        phone: '0342789876',
      },
    },
  ],
  identify,
});