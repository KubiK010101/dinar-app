import React from 'react';
import { SvgProps } from 'react-native-svg';
import ArrowBack from './arrow-back';
import Calendar from './calendar';
import Check from './check';
import HidePassword from './hidePassword';
import KeySkeleton from './key';
import ShowPassword from './showPassword';
import Calendar2 from './calendar2';
import Email from './email';
import Lock from './lock';
import Edit from './edit';
import ClearNumber from './clear-number';
import Unlock from './unlock';
import Home from './home';
import Wallet from './wallet';
import Money from './money';
import More from './more';
import User from './user';
import Notifications from './notifications';
import Wallet2 from './wallet2';
import Share from './share';
import Card from './card';
import ChatLine from './chart-line';
import Filter from './filter';
import Withdraw from './withdraw';
import Depoist from './depoist';
import Twitter from './twitter';
import Whatsapp from './whatsapp';
import Close from './close';
import Calendar3 from './calendar3';
import Invoce from './invoce';
import Dollar from './dollar';
import PdfExtinction from './pdf-extinction';
import Certificate from './certificate';
import Apple from './apple';
import Info from './info';
import CreditCard from './credit-card';
import ApplePay from './apple-pay';
import Mada from './mada';
import Plus from './plus';
import Visa from './visa';
import Mada2 from './mada2';
import Camera from './camera';
import Copy from './copy';
import Blog from './blog';
import Chat from './chat';
import CreditCardSolid from './credit-card-solid';
import Help from './help';
import Logo from './logo';
import Logout from './logout';
import Settings from './settings';
import Arrow from './arrow';
import Point from './point';
import Instagram from './instagram';
import Linkedin from './linkedin';
import CheckSolid from './check-solid';
import InfoSolid from './info-solid';
import Download from './download';
import Download2 from './download2';
import Book from './book';
import Auction from './auction';
import Clock from './clock';
import Podcast from './podcast';
import Fire from './fire';
import Minus from './minus';
import Plus2 from './plus2';
import Remove from './remove';
import BadgeCheck from './badge-check';
import File from './file';
import Users from './users';
import FileInvoice from './file-invoice';
import Percentage from './percentage';

export type IconsName =
  | 'calendar'
  | 'key'
  | 'showPassword'
  | 'hidePassword'
  | 'check'
  | 'arrow-back'
  | 'calendar2'
  | 'email'
  | 'lock'
  | 'edit'
  | 'clear-number'
  | 'unlock'
  | 'home'
  | 'wallet'
  | 'money'
  | 'more'
  | 'notifications'
  | 'user'
  | 'wallet2'
  | 'share'
  | 'card'
  | 'chat-line'
  | 'filter'
  | 'depoist'
  | 'withdraw'
  | 'whatsapp'
  | 'twitter'
  | 'close'
  | 'calendar3'
  | 'invoce'
  | 'dollar'
  | 'pdf-extinction'
  | 'certificate'
  | 'apple'
  | 'info'
  | 'credit-card'
  | 'apple-pay'
  | 'mada'
  | 'mada2'
  | 'visa'
  | 'plus'
  | 'camera'
  | 'copy'
  | 'blog'
  | 'chat'
  | 'credit-card-solid'
  | 'help'
  | 'logo'
  | 'logout'
  | 'settings'
  | 'arrow'
  | 'point'
  | 'linkedin'
  | 'instagram'
  | 'info-solid'
  | 'check-solid'
  | 'download'
  | 'download2'
  | 'book'
  | 'auction'
  | 'clock'
  | 'podcast'
  | 'fire'
  | 'plus2'
  | 'minus'
  | 'remove'
  | 'badgeCheck'
  | 'file'
  | 'users'
  | 'percentage'
  | 'file-invoice';

export type RotateTypes = 'left' | 'right' | 'top' | 'bottom';

export interface IconsProps {
  color?: string;
  width?: number;
  height?: number;
  name?: IconsName;
  rotate?: RotateTypes;
  type?: 'image' | 'svg';
}

const getRotate = (rotate: string) => {
  switch (rotate) {
    case 'top':
      return '90deg';
    case 'bottom':
      return '270deg';
    case 'left':
      return '0deg';
    case 'right':
      return '-180deg';
    default:
      return '0deg';
  }
};

function Icon(props: IconsProps & SvgProps) {
  const style = { transform: [{ rotate: getRotate(props.rotate || '') }] };
  switch (props.name) {
    case 'calendar':
      return <Calendar {...props} style={[props.rotate && style, props.style]} />;
    case 'key':
      return <KeySkeleton {...props} style={[props.rotate && style, props.style]} />;
    case 'showPassword':
      return <ShowPassword {...props} style={[props.rotate && style, props.style]} />;
    case 'hidePassword':
      return <HidePassword {...props} style={[props.rotate && style, props.style]} />;
    case 'check':
      return <Check {...props} style={[props.rotate && style, props.style]} />;
    case 'arrow-back':
      return <ArrowBack {...props} style={[props.rotate && style, props.style]} />;
    case 'calendar2':
      return <Calendar2 {...props} style={[props.rotate && style, props.style]} />;
    case 'email':
      return <Email {...props} style={[props.rotate && style, props.style]} />;
    case 'lock':
      return <Lock {...props} style={[props.rotate && style, props.style]} />;
    case 'edit':
      return <Edit {...props} style={[props.rotate && style, props.style]} />;
    case 'clear-number':
      return <ClearNumber {...props} style={[props.rotate && style, props.style]} />;
    case 'unlock':
      return <Unlock {...props} style={[props.rotate && style, props.style]} />;

    // home
    case 'home':
      return <Home {...props} style={[props.rotate && style, props.style]} />;
    case 'wallet':
      return <Wallet {...props} style={[props.rotate && style, props.style]} />;
    case 'money':
      return <Money {...props} style={[props.rotate && style, props.style]} />;
    case 'more':
      return <More {...props} style={[props.rotate && style, props.style]} />;
    case 'user':
      return <User {...props} style={[props.rotate && style, props.style]} />;
    case 'notifications':
      return <Notifications {...props} style={[props.rotate && style, props.style]} />;
    case 'wallet2':
      return <Wallet2 {...props} style={[props.rotate && style, props.style]} />;
    case 'share':
      return <Share {...props} style={[props.rotate && style, props.style]} />;
    case 'card':
      return <Card {...props} style={[props.rotate && style, props.style]} />;
    case 'chat-line':
      return <ChatLine {...props} style={[props.rotate && style, props.style]} />;
    case 'filter':
      return <Filter {...props} style={[props.rotate && style, props.style]} />;
    case 'depoist':
      return <Depoist {...props} style={[props.rotate && style, props.style]} />;
    case 'withdraw':
      return <Withdraw {...props} style={[props.rotate && style, props.style]} />;
    case 'whatsapp':
      return <Whatsapp {...props} style={[props.rotate && style, props.style]} />;
    case 'twitter':
      return <Twitter {...props} style={[props.rotate && style, props.style]} />;
    case 'close':
      return <Close {...props} style={[props.rotate && style, props.style]} />;

    case 'calendar3':
      return <Calendar3 {...props} style={[props.rotate && style, props.style]} />;
    case 'invoce':
      return <Invoce {...props} style={[props.rotate && style, props.style]} />;
    case 'dollar':
      return <Dollar {...props} style={[props.rotate && style, props.style]} />;
    case 'pdf-extinction':
      return <PdfExtinction {...props} style={[props.rotate && style, props.style]} />;
    case 'certificate':
      return <Certificate {...props} style={[props.rotate && style, props.style]} />;

    case 'apple':
      return <Apple {...props} style={[props.rotate && style, props.style]} />;
    case 'info':
      return <Info {...props} style={[props.rotate && style, props.style]} />;

    case 'credit-card':
      return <CreditCard {...props} style={[props.rotate && style, props.style]} />;
    case 'apple-pay':
      return <ApplePay {...props} style={[props.rotate && style, props.style]} />;
    case 'mada':
      return <Mada {...props} style={[props.rotate && style, props.style]} />;
    case 'mada2':
      return <Mada2 {...props} style={[props.rotate && style, props.style]} />;
    case 'visa':
      return <Visa {...props} style={[props.rotate && style, props.style]} />;
    case 'plus':
      return <Plus {...props} style={[props.rotate && style, props.style]} />;
    case 'camera':
      return <Camera {...props} style={[props.rotate && style, props.style]} />;
    case 'copy':
      return <Copy {...props} style={[props.rotate && style, props.style]} />;

    case 'blog':
      return <Blog {...props} style={[props.rotate && style, props.style]} />;
    case 'chat':
      return <Chat {...props} style={[props.rotate && style, props.style]} />;
    case 'credit-card-solid':
      return <CreditCardSolid {...props} style={[props.rotate && style, props.style]} />;
    case 'help':
      return <Help {...props} style={[props.rotate && style, props.style]} />;
    case 'logo':
      return <Logo {...props} style={[props.rotate && style, props.style]} />;
    case 'logout':
      return <Logout {...props} style={[props.rotate && style, props.style]} />;
    case 'settings':
      return <Settings {...props} style={[props.rotate && style, props.style]} />;
    case 'arrow':
      return <Arrow {...props} style={[props.rotate && style, props.style]} />;
    case 'point':
      return <Point {...props} style={[props.rotate && style, props.style]} />;
    case 'instagram':
      return <Instagram {...props} style={[props.rotate && style, props.style]} />;
    case 'linkedin':
      return <Linkedin {...props} style={[props.rotate && style, props.style]} />;
    case 'check-solid':
      return <CheckSolid {...props} style={[props.rotate && style, props.style]} />;
    case 'info-solid':
      return <InfoSolid {...props} style={[props.rotate && style, props.style]} />;
    case 'download':
      return <Download {...props} style={[props.rotate && style, props.style]} />;
    case 'download2':
      return <Download2 {...props} style={[props.rotate && style, props.style]} />;
    case 'book':
      return <Book {...props} style={[props.rotate && style, props.style]} />;
    case 'auction':
      return <Auction {...props} style={[props.rotate && style, props.style]} />;
    case 'clock':
      return <Clock {...props} style={[props.rotate && style, props.style]} />;
    case 'podcast':
      return <Podcast {...props} style={[props.rotate && style, props.style]} />;

    case 'fire':
      return <Fire {...props} style={[props.rotate && style, props.style]} />;
    case 'minus':
      return <Minus {...props} style={[props.rotate && style, props.style]} />;
    case 'plus2':
      return <Plus2 {...props} style={[props.rotate && style, props.style]} />;
    case 'remove':
      return <Remove {...props} style={[props.rotate && style, props.style]} />;
    case 'badgeCheck':
      return <BadgeCheck {...props} style={[props.rotate && style, props.style]} />;
    case 'file':
      return <File {...props} style={[props.rotate && style, props.style]} />;

    case 'users':
      return <Users {...props} style={[props.rotate && style, props.style]} />;
    case 'file-invoice':
      return <FileInvoice {...props} style={[props.rotate && style, props.style]} />;
    case 'percentage':
      return <Percentage {...props} style={[props.rotate && style, props.style]} />;

    default:
      return <Calendar {...props} />;
  }
}

export default Icon;
