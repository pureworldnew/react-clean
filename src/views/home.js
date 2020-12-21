import React, { useState, useEffect, useRef } from 'react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  ButtonDropdown,
  Button,
  Input,
  FormGroup,
  Label,
  Form,
} from 'reactstrap';
import Select from 'react-select';

import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { scroller } from 'react-scroll';
import Headroom from 'react-headroom';
import GlideComponent from '../components/carousel/GlideComponent';
import { loginUrl, registerUrl } from '../constants/defaultValues';
import IntlMessages from '../helpers/IntlMessages';
import { Colxx } from '../components/common/CustomBootstrap';
import { ReactTableWithPaginationCard } from '../containers/ui/ContactorTableCard';
import MeasureSelect from '../containers/forms/MeasureSelect';
import CustomInputShape from '../containers/forms/CustomInputShape';
import CubeDimension from '../containers/forms/CubeDimension';
import CurrentUnitSelect from '../containers/forms/CurrentUnitSelect';
import NewUnitSelect from '../containers/forms/NewUnitSelect';
import CustomSelectInput from '../components/common/CustomSelectInput';
import { getCurrentUser } from '../helpers/Utils';

const slideSettings = {
  type: 'carousel',
  gap: 30,
  perView: 5,
  hideNav: false,
  peek: { before: 10, after: 10 },
  breakpoints: {
    '600': { perView: 1 },
    '992': { perView: 2 },
    '1200': { perView: 3 },
  },
};

const needDirtSlide = [
  {
    title: 'Clean Fill',
    location: 'Alberta, Paramus',
    detail: 'Qty: 30,000 Yards Please call 201488-4455 ask for Joe or George.',
  },
  {
    title: 'Clean Fill, Topsoil-Clean, Topsoil-Economy',
    location: 'Queensland, Greenbank',
    detail: 'Qty: 90m3 deliver to sloping block with 10m3 truck access',
  },
  {
    title: 'Sand Clay, Clean Fill, Gravel',
    location: 'Georgia, OAKWOOD',
    detail: 'Qty: 80 yards na',
  },
  {
    title: 'Sand Clay, Topsoil-Average, Topsoil-Economy',
    location: 'Texas, Keene',
    detail: 'Qty: 200 yards Low lieing area flood zone need pretty good fill',
  },
  {
    title: 'Clean Fill, Gravel, Topsoil-Average',
    location: 'New York, Bemus Point',
    detail:
      'Qty: As much as possible Filling swamp area. Pretty much any kind of clean fill',
  },
];
const haveDirtSlide = [
  {
    title: 'Clean Fill',
    location: 'Pennsylvania, Villanova',
    detail: 'Qty: 1 100 cubic yards',
  },
  {
    title: 'Clean Fill',
    location: 'Coral Sea Islands, GRACEVILLE',
    detail:
      'Qty: 35 cubic metres Available from GRACEVILLE, QUEENSLAND thursday 10th december 2020. Can deliver locally from Graceville.',
  },
  {
    title: 'Clean Fill',
    location: 'Delaware, Newark',
    detail:
      'Qty: 1 Building an in ground pool. 250 yards of clean fill available',
  },
  {
    title: 'Clean Fill',
    location: 'New York, East Hampton',
    detail: 'Qty: 600 yards of clean fill Fill is silt loam (ML)',
  },
  {
    title: 'Topsoil-Clean',
    location: 'Ohio, liberty twp',
    detail:
      'Qty: about 4 cu yrds trimming off the top 4 inches of 2 areas of my yard for concrete slabs installation.',
  },
];
const abouts = [
  {
    title: 'Our Mission',
    detail:
      'Our mission is to facilitate communication using an easy-to-use tool, between people who have dirt and people who need dirt in the same geographic region. <br/> Founded in 2002, this site was designed to meet the needs of both the construction industry and the general public. ',
  },
  {
    title: 'Why register with us?',
    detail:
      'In order to post your available dirt and have your contact information accessible to members who require dirt, you must first register an account. As a guest, you can browse our site. However, we will not provide you with contact information of our regostered clients who have dirt until you have registered. <br/> For questions and concerns regarding our privacy policy and how your information will be used, please read our terms of use page. ',
  },
  {
    title: 'Is there a fee?',
    detail:
      'There are NO fees for members who are looking for dirt.<br/>For members who are looking to get rid of their dirt, view our low -fees-.',
  },
  {
    title: 'Get your DIRT here!',
    detail:
      "Whether you are looking for one load of dirt or 1000 loads, we can hlp you find what you're looking for. Our easy-to-use and extensive client database can match you with members who have just what you need. We have designed this platform as a tool to conveniently match members who need dirt with those needing to get rid of it.<br/>Below are some tips to consider before you start looking for dirt:<br/><ol>" +
      '<li>Check to see if your property requires a permit for clean fill at City Hall</li>' +
      '<li>Verify the credentials and details of any company you deal with</li>' +
      '<li>Inspect all loads of incoming fill</li>' +
      '<li>Record details of all transporters bringing fill onto your property</li>' +
      '<li>Take precautions to avoid risking fines or costly cleanups</li>' +
      '<li>Bulking factor: remember to allow an approximate 20% increase in soil volume after excavation</li>' +
      '</ol>',
  },
  {
    title: 'How it all Works',
    detail:
      'You must be a registered member in order to have full access to our listings. Registration is required in order for members to have access to your contact information when they have a cut or fill that matches what you are looking for.<br/>Please note: only other registered members can access your contact information. This helps prevent spammers from gaining access to the contact information provided to us by our registered members.<br/>Once you have registered, you can immediately use your login information sign into your account and post your advertisement, or specify your search in the have fill or need fill listings.',
  },
];

const faqs = [
  {
    title: 'How do I advertise on this web site?',
    detail:
      "By using our 'contact us' form, feel free to ask any question you may have. Our personal relationship with you is important, so we will reply as soon as possible.",
  },
  {
    title: 'Who benefits from the use of this web site?',
    detail:
      'Members benefit by getting fill, which is free most of the time. People in need to get rid of fill benefit by finding close dump sites. The environment benefits with less machinery use and travel etc.',
  },
  {
    title: 'Can I list more than one site at a time?',
    detail: 'There is no limit on the number of listings you may have.',
  },
  {
    title: 'What is this web site all about?',
    detail:
      "This web site is designed to link people and companies together who either want fill / soil or need soil / fill. It's a great interface and is very easy to use. Also, other materials can be listed if desired.",
  },
  {
    title: 'Why sign up ?',
    detail:
      "Why sign up ? its FREE! why wouldn't you? Get access to all 'need' and 'have fill' listings, post all the listings you want, find contractors in your area! Have a company? why not add it to our database, so our visitors can contact you or vise versa. How does it work ? Lets say you need dirt, all you have to do is register, post 'need' or 'have fill' and wait for someone to contact you. Its that easy!",
  },
  {
    title: 'What is the standard units of measure?',
    detail:
      'Cubic Yards or Tons in standard size loads. How many wheelbarrow loads are there in a cubic yard? Usually it will take 9 loads in a 3 cubic foot wheelbarrow to carry one cubic yard. How much area does a cubic yard cover? At a depth of 3 inches, one cubic yard covers approximately 100 s.f. two inches approximately 200 s.f., or one inch at 300 s.f. Note: Coverage is an estimate and varies based on job conditions.',
  },
  {
    title: 'What is clean fill dirt?',
    detail:
      'Thats really the million-dollar question, isnt it? Clean fill dirt is a dirt fill that is easy to explain, but somewhat odd to comprehend. In short, this dirt fill is literally artificial dirt. It has the same characteristics of dirt in that it can be used to stabilize a foundation, fill in hole left by your weekend projects, and act as dirt in the event that you do not have enough dirt to finish a project completely. In short, while it is not dirt (and usually does not share any elemental characteristics with dirt), clean fill dirt behaves exactly like dirt.',
  },
  {
    title: 'What is clean fill dirt (and why homeowners should care)',
    detail:
      'If you have ever seen a sign on someones lawn that says, Clean fill dirt wanted, or clean fill dirt available, then you have likely been confused as to what this exactly means. Its understandable, as the term does not actually tell you anything about what it actually is. However, clean fill dirt is an important product for individuals of all walks of life, especially those who want to perform landscaping construction on their homes lawn. To understand what clean fill dirt is (and the significance of it), you need to know what the term means. To start, here is what the word clean relates to in the term: <img style="float: left; margin: 5px;" src="https://cleanfill.net/images/img3.jpg" alt="" width="350" /> The word clean in the clean fill dirt simply relates to the dirt fill being environmentally friendly. It is free from contamination, meaning one will not find anything in the fill dirt that is corrosive, combustible, radioactive, and so on. To put it simply, you will never find anything in clean fill dirt that is harmful to the environment (and if it is, then it is not truly clean fill dirt). The second part, fill dirt may seem self-explanatory, but it really is not. Sure, fill dirt that you find could actually be the type of dirt we are used to (e.g. topsoil), but there are so many different types of fill dirt other than this. Clay, sand, gravel, and even brick or concrete are just some of the types of clean fill dirt that homeowners typically look for to use for their landscaping projects. With this being said, we can deduct that clean fill dirt simply means, environmentally-friendly dirt fill that is used as dirt. By and large, this is exactly what clean fill dirt is, and it is the easiest way to apply landscaping to your home. So lets look at that for a moment: why would someone want to use this to landscape their homes lawn? Not only are there a multitude of substances that can be used as clean fill dirt, there is also a ton of it readily available for you and many times, for free. Why would someone give away their clean fill dirt if it is so useful, you ask? Its simple really: They no longer need it. Perhaps there was clean fill dirt left over at a construction site, and now they have no place to take it. Or perhaps someone obtained too much of it at their own home, and now they no longer need it. Remember the signs mentioned in the first of the article? This is exactly why you see those signs. People either have too much clean fill dirt, or are needing some, and one can be assured that there is someone who has an excessive amount and will drop it off for the individual needing the clean fill dirt in a moments notice. Clean fill dirt is one of the most useful substances used for landscaping. Acting as the actual earth, this imitation dirt is absolutely incredible and extremely versatile, not to mention very useful. The next time you want to landscape your home, display a sign stating, clean fill dirt wanted: not only will you receive your free dirt soon, you will also be saving yourself a lot of time and money, all the while helping the environment by placing substances that are non-harmful to the environment into the ground!',
  },
  {
    title: 'What cant clean fill be used for?',
    detail:
      'Clean fill dirt is useful for all types of situations, no matter if you are building onto your home or are building a new office building on your construction site. Clean fill dirt ensures that your project never falls behind simply because you do not have enough dirt to work with. And, because it is environmentally friendly and easy to come by, clean fill dirt will ensure that you will assuredly finish your project the right way the very first time. Just think, you have the ability to use artificial dirt that is safe for the environment as well. Take solace in knowing that you are not polluting the environment, all the while knowing that you may potentially finish your project ahead of schedule.',
  },
  {
    title: 'Why would someone want to give clean fill away?',
    detail:
      'Knowing how useful clean fill dirt can be, this may be a question on your mind, but it is one that is easily answered. To put it simply, when someone (or as the case may be, company) needs to rid of their clean fill dirt, they usually have two choices: Find someone to take it off their hands. Throw it away. The last choice is not ideal in any way, as most people do not want to have to pay any types of fees to dispose of it properly. Instead, if they can find someone that needs clean fill dirt for any type of project (or another company that needs it, say for their construction site), then they will gladly provide them with free dirt to do with it however they see fit. Final thoughts on the clean fill dirt bartering system As you can see, the clean fill dirt bartering system is very unique. By stating that you want ones leftover clean fill dirt for free, many individuals are glad to help you out by providing you with this type of dirt, which in turn helps them by saving them the hassle of disposing of the dirt. Its a win-win for everyone, and its one of the many ways clean fill dirt helps ordinary individuals and companies alike in getting their jobs done.',
  },
  {
    title: 'The barter system of clean fill dirt?',
    detail:
      'Theres an interesting (yet unofficial) bartering system in place all across North America that you have probably never heard about. It involves the trading of free dirt, and while this may seem as if it is a worthless and pointless system, once you know more about it, it suddenly becomes perfectly clear: the clean fill dirt bartering system is one of the most useful bartering systems still in existence. First, heres the question that is obviously on your mind: why would anyone want to do this? Its simple really: clean fill dirt is a unique dirt fill that is both heavily desired and heavily undesired, and the individuals that desired it the first time are usually the ones that want to get rid of it as quickly as possible. Confused? Thats understandable, but here is what we mean. <img style="float: right; margin: 5px;" src="https://cleanfill.net/images/img7.jpg" alt="" width="350" /> Lets start with why someone would want clean fill dirt. When someone wants to landscape their lawn for a project around their home (e.g. building an underground swimming pool could be one of them), then they will likely need excess dirt to work with. Unfortunately, they probably do not have enough in their own lawn; therefore, they often look for artificial dirt, (i.e. the clean fill dirt) to accomplish their project. The advantage of using clean fill dirt is two-fold: Clean fill dirt is usually easy to come by, especially since many individuals who use clean fill dirt usually have a lot left over. Because of this, many people simply want to get rid of their clean fill dirt as quickly as possible, and will many times even give it to someone free of charge. It is environmentally friendly. The last advantage is a big one: environmentally friendly. Because you are going to be placing the dirt fill into the ground, it goes without saying that it must be friendly to the environment. This will ensure that the soil around ones lawn remains in a healthy state and unpolluted. This is important, especially when there are many homes around the area that want to keep their property value at a consistent level (can you imagine how bad ones property value would be with poisoned soil? It would be terrible.).',
  },
  {
    title: 'What makes clean fill dirt so great?',
    detail:
      'What makes this wonder dirt so great is that it is easy accessible to nearly everyone. It is not hard to find due to the fact that it can be created from a variety of different substances (e.g. clay, topsoil, brick, concrete, and so on). And the best part? It is not harmful to the environment in any way. Thats right: you can rest easy at night knowing that the artificial dirt you placed into the ground via your earth mover will not pollute the soil around the vicinity of your site in any way. And if you have neighbors, then this is good news as well as you will not cause them any headache in the least.',
  },
  {
    title: 'Using earth movers and clean fill dirt',
    detail:
      'It goes without saying that if you are going to be moving the earth, then you need an abundance of dirt to do it. While you may think, what you dig up can be placed back into the ground without any problems or hiccups whatsoever, this train of thought is very wrong. Rather, you need some sort of dirt fill that you can use in place of dirt, so you can fill your holes, reshape the landscape, and generally get your project accomplished and fully completed on time without having to worry about gathering more dirt. How do you do this? Its easy: through clean fill dirt.',
  },
  {
    title: 'How does it relate to earth movers?',
    detail:
      'This is a question you are likely asking yourself, however it is easily answerable. If earth moving must be done for any reason, then you owe it to yourself to obtain clean fill dirt right away. You may not even need it, but chances are high that you will (and even if you dont, it is easy to give away as many individuals and construction companies are always looking for clean fill dirt to finish their projects or construction sites). This will save you the trouble of having to look for extra dirt in the long run, and you can be assured that you will never fall behind due to the lack of dirt when you have an abundance of clean fill dirt at your job site.',
  },
];

const selectCountry = [
  {
    label: 'Canada',
    value: 'canada',
    key: 0,
  },
  {
    label: 'United States',
    value: 'united_states',
    key: 1,
  },
  {
    label: 'Australia',
    value: 'australia',
    key: 2,
  },
  {
    label: 'New Zealand',
    value: 'new_zealand',
    key: 3,
  },
  {
    label: 'Ireland',
    value: 'ireland',
    key: 4,
  },
  {
    label: 'Norway',
    value: 'norway',
    key: 5,
  },
  {
    label: 'United Kingdom',
    value: 'uk',
    key: 6,
  },
];
const selectData = [
  { label: 'Cubic Feet', value: 'cubicFeet', key: 0 },
  { label: 'Cubic Metres', value: 'cubicMetres', key: 1 },
  { label: 'Cubic Yards', value: 'cubicYards', key: 2 },
];

const Home = ({ history }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isOpenSizingLg, setIsOpenSizingLg] = useState(false);
  const [isOpenHaveFill, setIsOpenHaveFill] = useState(false);
  const [isOpenSearchNeedFill, setOpenSearchNeedFill] = useState(false);
  const [isOpenSearchHaveFill, setOpenSearchHaveFill] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');

  const [selectedOption, setSelectedOption] = useState('');

  const refRowHome = useRef(null);
  const refSectionHome = useRef(null);
  const refSectionFooter = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll);
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('click', onWindowClick);

    document.body.classList.add('no-footer');
    return () => {
      window.removeEventListener('scroll', onWindowScroll);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('click', onWindowClick);
      document.body.classList.remove('no-footer');
    };
  }, []);

  const onWindowResize = (event) => {
    const homeRect = refRowHome.current.getBoundingClientRect();

    const homeSection = refSectionHome.current;
    homeSection.style.backgroundPositionX = homeRect.x - 580 + 'px';

    const footerSection = refSectionFooter.current;
    footerSection.style.backgroundPositionX =
      event.target.innerWidth - homeRect.x - 2000 + 'px';

    if (event.target.innerWidth >= 992) {
      setShowMobileMenu(false);
    }
  };

  const onWindowClick = () => {
    setShowMobileMenu(false);
  };

  const onWindowScroll = () => {
    setShowMobileMenu(false);
  };

  const scrollTo = (event, target) => {
    event.preventDefault();
    scroller.scrollTo(target, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100,
    });
    return false;
  };

  return (
    <div
      className={classnames('landing-page', {
        'show-mobile-menu': showMobileMenu,
      })}
    >
      <div className="mobile-menu" onClick={(event) => event.stopPropagation()}>
        <a
          className="logo-mobile c-pointer"
          href="#scroll"
          onClick={(event) => scrollTo(event, 'home')}
        >
          <span></span>
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'home')}
            >
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'abouts')}
            >
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'contactor')}
            >
              CONTACTOR
            </a>
          </li>
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'fillCalculator')}
            >
              FILL CALCULATOR
            </a>
          </li>
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'faq')}
            >
              FAQ
            </a>
          </li>
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'contact')}
            >
              CONTACT US
            </a>
          </li>
          <li className="nav-item">
            <div className="separator"></div>
          </li>
          <li className="nav-item pl-4">
            <a
              className="btn btn-outline-semi-light btn-sm pr-4 pl-4"
              rel="noopener noreferrer"
              href={loginUrl}
            >
              Sign In
            </a>
          </li>
          <li className="nav-item pl-4">
            <a
              className="btn btn-outline-semi-light btn-sm pr-4 pl-4"
              rel="noopener noreferrer"
              href={registerUrl}
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>

      <div className="main-container">
        <Headroom className="landing-page-nav">
          <nav>
            <div className="container d-flex align-items-center justify-content-between">
              <a
                className="navbar-logo pull-left c-pointer"
                href="#scroll"
                onClick={(event) => scrollTo(event, 'home')}
              >
                <span className="white"></span>
                <span className="dark"></span>
              </a>
              <ul className="navbar-nav d-none d-lg-flex flex-row">
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'home')}
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'abouts')}
                  >
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'contactor')}
                  >
                    CONTACTOR
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'fillCalculator')}
                  >
                    FILL CALCULATOR
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'faq')}
                  >
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'contact')}
                  >
                    CONTACT US
                  </a>
                </li>
                <li className="nav-item pl-4">
                  <a
                    className="btn btn-outline-semi-light btn-sm pr-4 pl-4"
                    rel="noopener noreferrer"
                    href={loginUrl}
                  >
                    Sign In
                  </a>
                </li>
                <li className="nav-item pl-4">
                  <a
                    className="btn btn-outline-semi-light btn-sm pr-4 pl-4"
                    rel="noopener noreferrer"
                    href={registerUrl}
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
              <span
                className="mobile-menu-button"
                onClick={(event) => {
                  setShowMobileMenu(!showMobileMenu);
                  event.stopPropagation();
                }}
              >
                <i className="simple-icon-menu"></i>
              </span>
            </div>
          </nav>
        </Headroom>
        <div className="content-container" id="home">
          <div className="section home" ref={refSectionHome}>
            <div className="container">
              <div className="row home-row" ref={refRowHome}>
                <div className="col-12 d-block d-md-none">
                  <NavLink to="/">
                    <img
                      alt="mobile hero"
                      className="mobile-hero"
                      src="/assets/img/landing-page/home-hero-mobile.png"
                    />
                  </NavLink>
                </div>

                <div className="col-12 text-center">
                  <div className="home-text">
                    <div className="display-1">Clean Fill Network</div>
                    <p className="white mb-5">
                      You can get free fill dirt, increase productivity and
                      profitability with this dirt network.
                      <br />
                      <br />
                      “Where to get fill dirt near me” is the most popular
                      question on google, you found it clean fill network.{' '}
                      <br />
                      <br />
                      From clean fill dirt dump sites to clean fill dirt for
                      sale near me, clean fill network is the only place you can
                      get free topsoil. So the next time you’re looking for
                      clean fill dirt for sale, post a classified ad here for
                      free.
                    </p>
                    {/* <NavLink
                      className="btn btn-light btn-xl mr-2 mb-2"
                      to={adminRoot}
                    >
                      VIEW NOW <i className="simple-icon-arrow-right"></i>
                    </NavLink> */}
                  </div>
                </div>
                <div className="col-12 d-none d-md-block d-flex justify-content-center">
                  <div className="d-flex justify-content-around h-100 align-items-center">
                    <ButtonDropdown
                      className="mr-1 mb-1"
                      isOpen={isOpenSizingLg}
                      toggle={() => setIsOpenSizingLg(!isOpenSizingLg)}
                    >
                      <DropdownToggle caret size="lg" color="secondary">
                        <IntlMessages id="dropdowns.need-fill" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          onClick={() => {
                            setOpenSearchNeedFill(true);
                            setOpenSearchHaveFill(false);
                          }}
                        >
                          <IntlMessages id="dropdowns.search-need-fill" />
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => {
                            getCurrentUser()
                              ? history.push('/app/listings/need')
                              : history.push(loginUrl);
                          }}
                        >
                          <IntlMessages id="dropdowns.post-need-fill" />
                        </DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                    <ButtonDropdown
                      className="mr-1 mb-1"
                      isOpen={isOpenHaveFill}
                      toggle={() => setIsOpenHaveFill(!isOpenHaveFill)}
                    >
                      <DropdownToggle caret size="lg" color="info">
                        <IntlMessages id="dropdowns.have-fill" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          onClick={() => {
                            setOpenSearchHaveFill(true);
                            setOpenSearchNeedFill(false);
                          }}
                        >
                          <IntlMessages id="dropdowns.search-have-fill" />
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => {
                            getCurrentUser()
                              ? history.push('/app/listings/have')
                              : history.push(loginUrl);
                          }}
                        >
                          <IntlMessages id="dropdowns.post-have-fill" />
                        </DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </div>
              </div>
              {isOpenSearchNeedFill ? (
                <div className="text-white">
                  <Row>
                    <Colxx xxs="12" className="mb-4 text-white">
                      <div className="text-white need-search-heading mb-4">
                        Clean Fill Wanted near me
                      </div>
                      <div className="text-white need-search-sub-heading mb-4">
                        Clean Fill Wanted Directory
                      </div>

                      <p className="text-white">
                        To find a member who needs clean fill, has a
                        property/company that needs loads, use this Search Tool
                        to view the “Need Fill” listings based on your criteria.
                        It is your best solution for saving time, manpower and
                        most of all money.
                      </p>
                      <div className="font-weight-bold mb-4">
                        Please select a location.
                      </div>
                      <div>
                        <Row>
                          <Colxx xxs="12" md="7" className="mb-5 mx-auto">
                            <label>
                              <IntlMessages id="forms.general-country" />
                            </label>
                            <Select
                              components={{ Input: CustomSelectInput }}
                              className="react-select"
                              classNamePrefix="react-select"
                              name="form-field-name"
                              value={selectedCountry}
                              onChange={setSelectedCountry}
                              options={selectCountry}
                            />
                          </Colxx>
                        </Row>
                        <Row>
                          <Colxx xxs="12" md="7" className="mb-5 mx-auto">
                            <label>
                              <IntlMessages id="forms.province-state" />
                            </label>
                            <Select
                              components={{ Input: CustomSelectInput }}
                              className="react-select"
                              classNamePrefix="react-select"
                              name="form-field-name"
                              value={selectedOption}
                              onChange={setSelectedOption}
                              options={selectData}
                            />
                          </Colxx>
                        </Row>
                        <Row>
                          <Colxx xxs="12" md="7" className="mb-5 mx-auto">
                            <Label for="city">
                              <IntlMessages id="forms.city" />
                            </Label>
                            <Input type="text" name="city" id="city" />
                          </Colxx>
                        </Row>

                        <Row>
                          <p className="text-center text-white mx-auto">
                            *Your Country is not listed?
                            <a
                              className="c-pointer ml-4 text-warning"
                              href="#scroll"
                              onClick={(event) => scrollTo(event, 'contact')}
                            >
                              Contact us!
                            </a>
                          </p>
                        </Row>
                        <Row>
                          <Button color="primary" className="mx-auto">
                            <IntlMessages id="landing.search-button" />
                          </Button>
                        </Row>
                      </div>
                    </Colxx>
                  </Row>
                </div>
              ) : (
                ''
              )}
              {isOpenSearchHaveFill ? (
                <div className="text-white">
                  <Row>
                    <Colxx xxs="12" className="mb-4 text-white">
                      <div className="text-white need-search-heading mb-4">
                        Clean Fill Near me
                      </div>
                      <div className="text-white need-search-sub-heading mb-4">
                        Clean Fill Directory
                      </div>

                      <p className="text-white">
                        To find a member who has available Fill, use this Search
                        Tool to view the “Have Fill” listings based on your
                        selection criteria. It is your best solution for saving
                        time, manpower and most of all money.
                      </p>
                      <div className="font-weight-bold mb-4">
                        Please select one or more Fill Types and any location or
                        time period(s) if preferred.
                      </div>
                      <div>
                        <Row>
                          <Colxx xxs="12" md="7" className="mb-5 mx-auto">
                            <label>
                              <IntlMessages id="forms.general-country" />
                            </label>
                            <Select
                              components={{ Input: CustomSelectInput }}
                              className="react-select"
                              classNamePrefix="react-select"
                              name="form-field-name"
                              value={selectedCountry}
                              onChange={setSelectedCountry}
                              options={selectCountry}
                            />
                          </Colxx>
                        </Row>
                        <Row>
                          <Colxx xxs="12" md="7" className="mb-5 mx-auto">
                            <label>
                              <IntlMessages id="forms.province-state" />
                            </label>
                            <Select
                              components={{ Input: CustomSelectInput }}
                              className="react-select"
                              classNamePrefix="react-select"
                              name="form-field-name"
                              value={selectedOption}
                              onChange={setSelectedOption}
                              options={selectData}
                            />
                          </Colxx>
                        </Row>
                        <Row>
                          <Colxx xxs="12" md="7" className="mb-5 mx-auto">
                            <Label for="city">
                              <IntlMessages id="forms.city" />
                            </Label>
                            <Input type="text" name="city" id="city" />
                          </Colxx>
                        </Row>

                        <Row>
                          <p className="text-center text-white mx-auto">
                            *Your Country is not listed?
                            <a
                              className="c-pointer ml-2 text-warning"
                              href="#scroll"
                              onClick={(event) => scrollTo(event, 'contact')}
                            >
                              Contact us!
                            </a>
                          </p>
                        </Row>
                        <Row>
                          <p className="text-center text-white mx-auto">
                            If you can’t find a member who has what you are
                            looking for - Create your own "
                            <span
                              className="c-pointer text-warning"
                              onClick={() => {
                                getCurrentUser()
                                  ? history.push('/app/listings/need')
                                  : history.push(loginUrl);
                              }}
                              href="#"
                            >
                              Need Fill
                            </span>
                            " listing to get your fill moving faster!!
                          </p>
                        </Row>
                        <Row>
                          <Button color="primary" className="mx-auto">
                            <IntlMessages id="landing.search-button" />
                          </Button>
                        </Row>
                      </div>
                    </Colxx>
                  </Row>
                </div>
              ) : (
                ''
              )}

              <div className="text-white display-4 text-center heading-people">
                People That Need Dirt
              </div>
              <div className="row mb-5">
                <div className="col-12 p-0">
                  <div className="home-carousel">
                    <GlideComponent settings={slideSettings}>
                      {needDirtSlide.map((f, index) => (
                        <div key={`slide_${index}`} className="card">
                          <div className="card-body text-center">
                            <div>
                              {/* <i className={f.icon + ' large-icon'}></i> */}
                              <a
                                className="mb-3 font-weight-semibold"
                                href="https://www.cleanfill.net/search/need/Paramus/Alberta"
                              >
                                {f.title}
                              </a>
                              <h6 className="mb-3 font-weight-normal">
                                {f.location}
                              </h6>
                            </div>
                            <div>
                              <p className="detail-text">{f.detail}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </GlideComponent>
                  </div>
                </div>
              </div>
              <div className="text-white display-4 text-center heading-people">
                People That Have Dirt
              </div>
              <div className="row">
                <div className="col-12 p-0">
                  <div className="home-carousel">
                    <GlideComponent settings={slideSettings}>
                      {haveDirtSlide.map((f, index) => (
                        <div key={`slide_${index}`} className="card">
                          <div className="card-body text-center">
                            <div>
                              {/* <i className={f.icon + ' large-icon'}></i> */}
                              <a
                                className="mb-3 font-weight-semibold"
                                href="https://www.cleanfill.net/search/need/Paramus/Alberta"
                              >
                                {f.title}
                              </a>
                              <h6 className="mb-3 font-weight-normal">
                                {f.location}
                              </h6>
                            </div>
                            <div>
                              <p className="detail-text">{f.detail}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </GlideComponent>
                  </div>
                </div>
              </div>
              {/* <div className="col-12">
                <div className="col-6">People That Need Dirt</div>
                <div className="col-6">People That Have</div>
              </div> */}

              <div className="row">
                <a
                  className="btn btn-circle btn-outline-semi-light hero-circle-button"
                  href="#scroll"
                  onClick={(event) => scrollTo(event, 'abouts')}
                >
                  <i className="simple-icon-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="container" id="abouts">
              <div className="row mb-4">
                <div className="col-12 text-center">
                  <h1>About</h1>
                  <div className="row d-flex justify-content-between ml-1">
                    <div className="mr-1">
                      <img src="/assets/img/landing-page/img1.jpg" alt="" />
                    </div>
                    <div className="mr-1">
                      <img src="/assets/img/landing-page/img4.jpg" alt="" />
                    </div>
                    <div className="mr-1">
                      <img src="/assets/img/landing-page/img8.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              {abouts.map((about, i) => (
                <div key={`feature_${i}`}>
                  <div className="row about-row">
                    <div className="col-12 d-flex align-items-center">
                      <div className="about-text-container">
                        <h2>{about.title}</h2>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: about.detail,
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section background">
            <div className="container" id="contactor">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Contactors Fill Search Result Listing</h1>
                  <p>
                    The listings below matched your Contactors Fill search
                    criteria.
                    <br />
                    Use the icon to view all listing of a Member. Use the icon
                    to Contact that Member. You must have an active membership
                    to view Contact Information for these listings.
                  </p>
                </div>
              </div>

              <Colxx xxs="12">
                <ReactTableWithPaginationCard />
              </Colxx>
            </div>
          </div>

          <div className="section mb-0">
            <div className="container" id="fillCalculator">
              <div className="row mb-5">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Fill Calculator</h1>
                  <p>
                    We hope to provide you with the best online clean fill
                    calculator, as well as all relevant information regarding
                    clean fill dirt near you, If you don't know how to calculate
                    how much clean fill dirt you need or have, Use our fill dirt
                    calculator. Our fill calculator can help you figure out how
                    much fill dirt you will need for your construction project.
                    This cubic yard calculator works with top soil, mulch,
                    gravel, dirt fill, clean fill, fill dirt.
                    <br />
                    <br />
                    This calculator is designed to give an approximate volume
                    quantity for fill, gravel, rock or mulch to fill or cover a
                    given area, either generally rectangular or generally round.
                    (You must estimate if the area is oblong.) Enter the width,
                    length, and thickness (how deep you want the cover) of your
                    rectangular area, or enter the diameter and depth (of the
                    cover) of your circular area, click on whether you are
                    measuring each designation in feet or inches (they do not
                    all have to be the same), then click Calculate. The
                    calculator will estimate the number of cubic inches, feet,
                    yards and tons of material required, as well as the
                    estimated cost if you entered the cost value of a cubic yard
                    or ton of cover material.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 offset-0 col-lg-8 offset-lg-2 row">
              <div className="col-6">
                <Row className="mb-4">
                  <Colxx xxs="12">
                    <Card>
                      <CardBody>
                        <CardTitle>
                          <IntlMessages id="landing.volume-calculator" />
                          <hr />
                        </CardTitle>
                        <CustomInputShape />
                        <MeasureSelect />
                        <Label for="enterDimension">
                          <IntlMessages id="landing.enter-dimension" />
                        </Label>
                        <CubeDimension />
                        <Button color="primary" className="mt-4 mr-4">
                          <IntlMessages id="landing.calculate-button" />
                        </Button>
                        <Button color="secondary" className="mt-4">
                          <IntlMessages id="landing.reset-button" />
                        </Button>
                      </CardBody>
                    </Card>
                  </Colxx>
                </Row>
              </div>
              <div className="col-6">
                <Row className="mb-4">
                  <Colxx xxs="12">
                    <Card>
                      <CardBody>
                        <CardTitle>
                          <IntlMessages id="landing.unit-convertors" />
                          <hr />
                        </CardTitle>
                        <CurrentUnitSelect />
                        <NewUnitSelect />
                        <Label for="enterDimension">
                          <IntlMessages id="landing.enter-value-convert" />
                        </Label>
                        <Input type="text" name="length" id="length" />
                        <Button color="primary" className="mt-4 mr-4">
                          <IntlMessages id="landing.convert-button" />
                        </Button>
                        <Button color="secondary" className="mt-4">
                          <IntlMessages id="landing.reset-button" />
                        </Button>
                      </CardBody>
                    </Card>
                  </Colxx>
                </Row>
              </div>
            </div>
          </div>

          <div className="section background">
            <div className="container" id="faq">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 mb-4">
                  <h1>FAQs</h1>
                  {faqs.map((faq, i) => (
                    <div key={`feature_${i}`}>
                      <div className="row faq-row">
                        <div className="col-12 d-flex align-items-center">
                          <div className="faq-text-container">
                            <h2>{faq.title}</h2>
                            <hr />
                            <p
                              className="section-text"
                              dangerouslySetInnerHTML={{
                                __html: faq.detail,
                              }}
                            ></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="section mb-0">
            <div className="container" id="contact">
              <div className="row mb-5">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2">
                  <h1>Contact Us</h1>
                  <p>
                    Thank you for your interest in Clean Fill network. If you
                    would like to learn more about our company, or if you have
                    questions about our memberships we offer. We look forward to
                    hearing from you.
                    <br />
                    <br />
                    <h3 className="text-danger font-weight-bold">
                      Please don't ask for clean fill dirt
                    </h3>
                    <br />
                    we are just a fill dirt listing site, Please post in need or
                    have fill section..
                    <br />
                    If you have any problems or need help please email us.
                  </p>
                  <Row className="mb-4">
                    <Colxx xxs="12">
                      <Card>
                        <CardBody>
                          <CardTitle>
                            <IntlMessages id="forms.grid" />
                          </CardTitle>
                          <Form>
                            <FormGroup row>
                              <Colxx sm={6}>
                                <FormGroup>
                                  <Label for="contactName">
                                    <IntlMessages id="landing.contact-name" />
                                  </Label>
                                  <Input
                                    type="text"
                                    name="contactName"
                                    id="contactName"
                                  />
                                </FormGroup>
                              </Colxx>

                              <Colxx sm={6}>
                                <FormGroup>
                                  <Label for="exampleEmailGrid">
                                    <IntlMessages id="landing.contact-email" />
                                  </Label>
                                  <Input
                                    type="email"
                                    name="exampleEmailGrid"
                                    id="exampleEmailGrid"
                                  />
                                </FormGroup>
                              </Colxx>

                              <Colxx sm={12}>
                                <FormGroup>
                                  <Label for="subject">
                                    <IntlMessages id="landing.contact-subject" />
                                  </Label>
                                  <Input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                  />
                                </FormGroup>
                              </Colxx>

                              <Colxx sm={12}>
                                <FormGroup>
                                  <Label for="contactMessage">
                                    <IntlMessages id="landing.contact-message" />
                                  </Label>
                                  <Input
                                    type="textarea"
                                    name="contactMessage"
                                    id="contactMessage"
                                  />
                                </FormGroup>
                              </Colxx>
                            </FormGroup>

                            <Button color="primary">
                              <IntlMessages id="landing.contact-send" />
                            </Button>
                          </Form>
                        </CardBody>
                      </Card>
                    </Colxx>
                  </Row>
                </div>
              </div>
            </div>
          </div>

          <div className="section background background-no-bottom mb-0 pb-0">
            <div className="container">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <p>
                    Clean fill network is an online dirt fill listing site
                    connecting people who need or have clean fill, find people
                    in your local area quickly and effectively. Clean fill
                    network is available across the United States, Canada and
                    Australia.
                  </p>
                </div>
                <div className="col-12 offset-0 col-lg-6 offset-lg-3 newsletter-input-container">
                  <div className="text-center mb-3">
                    <a
                      className="btn btn-secondary btn-xl"
                      rel="noopener noreferrer"
                      href={registerUrl}
                    >
                      REGISTER NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section footer mb-0" ref={refSectionFooter}>
            <div className="container">
              <div className="row footer-row">
                <div className="col-12 text-right">
                  <a
                    className="btn btn-circle btn-outline-semi-light footer-circle-button c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'home')}
                  >
                    <i className="simple-icon-arrow-up"></i>
                  </a>
                </div>
                <div className="col-12 text-center footer-content">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'home')}
                  >
                    <h1>free clean fill dirt</h1>
                  </a>
                </div>
              </div>
            </div>
            <div className="container copyright pt-5 pb-5">
              <div className="row">
                <div className="col-12 text-center d-flex justify-content-center">
                  <p className="mb-0 mr-2">©2020 Cleanfill.net</p>
                  <p className="mb-0 mr-2">Terms of Use</p>
                  <p className="mb-0 mr-2">Sitemap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
