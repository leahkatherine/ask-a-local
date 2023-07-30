import {Container, Row, Col} from 'reactstrap';
import portCover from '../app/assets/img/portCover.png';



const Footer = () => {
    return (
        <footer className='site-footer'>
                <Container className='flex-box'>
                    <Col md='6'>
                            <img src={ portCover} id="businessCard" alt="business card" style={{ float: 'left', width: '300px', height:'150px' }}/>
                    </Col>
                    <Col xs='6' sm='3' md='3'>
                            <h5>Social</h5>
                                <a
                                    className='btn btn-social-icon btn-instagram'
                                    href='http://instagram.com/'
                                >
                                    <i className='fa fa-instagram' />
                                </a>{' '}
                                <a
                                    className='btn btn-social-icon btn-facebook'
                                    href='http://www.facebook.com/'
                                >
                                    <i className='fa fa-facebook' />
                                </a>{' '}
                                <a
                                    className='btn btn-social-icon btn-twitter'
                                    href='http://twitter.com/'
                                >
                                    <i className='fa fa-twitter' />
                                </a>{' '}
                                <a
                                    className='btn btn-social-icon btn-google'
                                    href='http://youtube.com/'
                                >
                                    <i className='fa fa-youtube' />
                                </a>
                        </Col>
                        <Col sm='4' md='3'>
                            <a
                                    role='button'
                                    className='btn btn-link'
                                    href='tel:+12065551234'
                                >
                                    <i className='fa fa-phone' /> 8675-309
                                </a>
                                <br />
                                <a
                                    role='button'
                                    className='btn btn-link'
                                    href='mailto: askalocal@gmail.com'
                                >
                                    <i className='fa fa-envelope-o' /> askalocal@gmail.com
                            </a>
                        </Col>
                </Container>
        </footer>
    )
}

export default Footer;