import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"

export const Home=()=>{
    return(<>
        <div className="container">
            
            <div className="row justify-content-center">
                <div className="col-lg-12 col-md-10 col-sm-12 p-3">
                    <div className="row justify-content-around p-2 bg-info">
                        <Card className="col-lg-5 col-md-12 me-1 mb-1 shadow p-3 bg-success text-light">
                            <CardContent>
                                <Typography align="center" variant="h3" color="text.light">
                                    Update Profile
                                </Typography>
                                <Typography align="center" variant="body1">
                                    Change the account properties except account number
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button color="inherit" size="medium">Update</Button>
                            </CardActions>
                        </Card>
                        <Card className="col-lg-5 col-md-12 me-1 mb-1 shadow p-3 bg-danger text-light">
                            <CardContent>
                                <Typography align="center" variant="h3" color="text.light">
                                    Close Account
                                </Typography>
                                <Typography align="center" variant="body1">
                                    We recommand do not close account since we offer lot of offers to you
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button color="inherit" size="medium">Close</Button>
                            </CardActions>
                        </Card>
                        <Card className="col-lg-5 col-md-12 me-1 mb-1 shadow p-3 bg-secondary text-light">
                            <CardContent>
                                <Typography align="center" variant="h3" color="text.light">
                                    Create New Transaction
                                </Typography>
                                <Typography align="center" variant="body1">
                                    Create Any transaction such as credit, transfer, debit etc..
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button color="inherit" size="medium">DO</Button>
                            </CardActions>
                        </Card>
                        <Card className="col-lg-5 col-md-12 me-1 mb-1 shadow p-3 bg-dark text-light">
                            <CardContent>
                                <Typography align="center" variant="h3" color="text.light">
                                    Transactions
                                </Typography>
                                <Typography align="center" variant="body1">
                                    Showing all transaction done by you
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="/showt" className="btn btn-outline-light">LIST</a>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </>)
}