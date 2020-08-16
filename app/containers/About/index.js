/**
 *
 * About
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Card from '../../components/Card';
import styled from 'styled-components'
import Button from '../../components/Button';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

const Details = styled.div`
    max-height: ${props => props.open ? "100%" : "0"};
    overflow: hidden;
    padding: ${props => props.open ? "25px 0" : "0"};
    
`;

const Txt = () => <div><p>
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
شرایط سخت تایپ به پایان رسد.
</p><p>
 زمان مورد نیاز شامل حروفچینی دستاوردهای
اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
ستون و سطرآنچنان که لازم است.
<p></p>
و برای شرایط فعلی تکنولوژی مورد نیاز، و
کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
قرار گیرد.
</p></div>;


export function About() {
  const [openedPanel, setOpenedPanel] = useState(-1)
  function toggle(number) {
    if (openedPanel !== number)
      return setOpenedPanel(number)
    setOpenedPanel(-1)
  }
  return (
    <>
      <Card>
     <Button onClick={() => toggle(0)}>
  <FormattedMessage {...messages.button}/>
     </Button>
     <Details open={openedPanel === 0}>
      <Txt/>
     </Details>
     <Button onClick={() => toggle(1)}>
       <span>اشتراک</span>
     </Button>
     <Details open={openedPanel === 1}>
     <Txt/>
     </Details>
     <Button onClick={() => toggle(2)}>
       <span>دوره اشتراک رایگان، ترفیعات و جوایز</span>
     </Button>
     <Details open={openedPanel === 2}>
     <Txt/>
     </Details>
      </Card>
    </>
  );
}

About.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(About);
