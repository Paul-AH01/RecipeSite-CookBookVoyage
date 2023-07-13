import React from 'react';
import { recipesRouter } from '../../../backend/routes/recipes';

export default function UserProfile() {
    return (
    <section className="vh-100" style={{ backgroundColor: '#16161d' }}>
        <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol lg="6" className="mb-4 mb-lg-0">
                    <MDBCard className="mb-3" style={{ borderRadius: '.5rem'}}>
                        <MDBRow className="g-0">
                            <MDBCol md="4" className="gradient-custon text-center text-white"
                            style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem'}}>
                                <MDBCardImage src="Image here" 
                                alt="Avatar" className="my-5" style={{ width: '80px'}} fluid />
                                <MDBTypography tah="h5">User Profile</MDBTypography>
                                <MDBCardText>Member Since: 13/07/2023</MDBCardText>
                                <MDBIcon far icon="edit mb-5" />
                            </MDBCol>
                            <MDBCol md="8">
                                <MDBCardBody className="p-4">
                                    <MDBTypography tag="h6">My Recipes</MDBTypography>
                                    <hr className='mt-0 mb-4' />
                                    <MDBRow className="pt-1">
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h6">Email</MDBTypography>
                                            <MDBCardText className="text-muted">info@example.com</MDBCardText>
                                        </MDBCol>
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h6">Comments Recived</MDBTypography>
                                            <MDBCardText className="text-muted">-50 Comments-</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBTypography tag="6">Information</MDBTypography>
                                    <hr className='mt-0 mb-4' />
                                    <MDBRow className="pt-1">
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h6">Email</MDBTypography>
                                            <MDBCardText className="text-muted">info@example.com</MDBCardText>
                                        </MDBCol>
                                        <MDBCol size="6" className="mb-3">
                                        <MDBTypography tag="h6">Comments Recived</MDBTypography>
                                            <MDBCardText className="text-muted">-50 Comments-</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>

                                    <div className='d-flex justify-content-star'>
                                        <a href='#!'><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                                        <a href='#!'><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                                        <a href='#!'><MDBIcon fab icon="threads me-3" size="lg" /></a>
                                        <a href='#!'><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                                        <a href='#!'><MDBIcon fab icon="snapchat me-3" size="lg" /></a>
                                        <a href='#!'><MDBIcon fab icon="tiktok me-3" size="lg" /></a>
                                    </div>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </section>
    );
}