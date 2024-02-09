import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Big Whale Chat</span>
      <div className="user">
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA9gMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAEDBAYCBwj/xABCEAACAQMDAQYDBAYIBQUAAAABAgMABBEFEiExBhMiQVGRYXGhByMygRRCUrHB0RUkYnKCkqLxQ2Oy4fAWM1PC0v/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAhEQEBAAICAgIDAQAAAAAAAAAAAQIRAyESQTEyEyJhBP/aAAwDAQACEQMRAD8A82EgxnPPpU8VxjrQ8NiulfFASXYRkCqt4249agaRmXAOK5yfXNA1dCmp1oLEMe7nGasGMsB5VHbyIBgrira4I4NBB4oz1qzblZPgfWoiMnmrtjbliOODQEbBGVTu5Wup8bvQmiNtGsUOCATiq1xbFmLqKBWcOSN3nRyK3QxgbaEW7qgGCCw8qJWtyzrtIxQR3kaqDtAoHcR8naM0auQWfjmqrQhs4HzoBEdsWb1HmKL2diOMrUaRKjB0OSOtHbRxJF4U24FBCLNdu34U6woiDC5A68Vat4jksWyKsLDl8gYFAOaykumVI4yxboqjJNdT9ltQt4TJLZyBOpxg4/IVp9BnhgncEDvMZ6dBWgN6DH+Ly8vOg8jl04ZI2kH5VBBprMx2KW8ulbDWooUvmKADfzhfI1JoH6Ml1mcYQdc0GLktnjfayEL8aaHahKgZzWu7VfoTXOYCNprLGVIm2queetBJsYDI4+FQyGFEJflql7wu3PAodqB2EgHrQDru5Usdq4oe2JMknBp5i245qDcRQNPgEY5pVw4LYzmnoKNPSFdAUDCusU1PQKkOKVKglST9oZ+NTxvkjafOqgqzD5GgtRnDeKjNgw2ig6EEZPPxq5azDoDQH4eMZPFO0m5sJk5qO2DPGMc0Z0izjWXvJACsaM5z8qluo1jN2RSm094Yy5Iz5gUkYImAcNRK6SYxq5XwOOtDhD4izAk+VYwtym66c2Mxy1HImww8z608sLyEMDj5VZW1BGSMVKoMQ8Qro4qcUG0cD50SiZUUL0oWb63Fz3JlUOegz1qy04xlDk4psFITyAnU0cttMmmg3qp9ay+mSyvKMjit3ZaqsFn3bYLEUGbu7V0uRNbk96o2sP2hVyK7cphoyp88097clnJUKMmhklwWc+LB9M8UHWoyRkg9WoPc3ewFU8JIqSdnLmRc7fSqs+xz4uo54p8LJtE+6VRvJJ+dVpICp65zVuRgSMDGK5lIwCMUQLuJjCNo60Lurl5G5qfVJNs3WqJZSMk0CjgaY9PlTS2bRZJU0U0B4GvI1kbjIzW57Y2ekJooeB4xLjPh86DyOaQg4Axinrm6KCU4JpUFMU9LilQPSpU9A1PSpdKDoCug+2o8mnUEmgkErHgZxRGxjLKSelVIFTp50RtoycDPFAas52SPbHWgsWeTTb5xwVgOPzNZ+wQ8ACtNpSY0/U1bwg2/BPrmscn126cX3h9gk2ZJPgHX5VC52ybFHNdabFLcRqYfvHSMMVHWu7OZZL5RKnRumKnFf0OWXzu0kMUm0s/AFBNea4Fvuhka3hiO6SYc+vAHmeK9J1uPTRpyASxJIVzgnGcdaxWq215HpcsNhYG4FwzOW4OB0Hz4+gFXPfowmPtitPtIrm4Mj96kPdsTIercH0+NH9CuI5Entrncbu3k2y5GM+h9sVx2WuE0PTHFwVnuE3Ikcq8Jnr8/IUTstKQXEl53pWbUH7xh1woH0AH8Kzx45S9tcmeFmouRKyrmLipRcsuC272q8llC0TjvWwrbeuPIVXTZaFYe9MgPPTkVjPn1dSOmH+ffeV6QvqVufCe93endmqzmeVvu49q/tSHFTSzuZGbaAM8ZrkR98/OWqY58mXpcsOHD2qalvihnQudyYG9RwD1wPU0C7q7eYJJvIzu64rTTQSBfEuAvIzVMqFl8Z6fWuk477rnlzY/GMV2gkKlgKHXsjxAda9I0e102TSnkmKh8eZrzrXSvfyKpBUHiurgz95JvJ3Gh/fBQVGTU90CzE54qkwCn40E8N00LBl4NTS6jLLHtd2PzNUTzTEGg5clmyaVIg0qCPnOMGnyPPj517RN2D7K61GJtOjSP+1YXA2j/AAg7fpWfv/souVO7TdVicfsXMe0+6/8A5oPOBzT4rQ3/AGI7R6dky6ZJNGP+JbkSD2HP0oK8TJIYpFKSjrG42sPyNBAKepNhzyK6EIJxQQ8VNHGWHFTLZO3IFXILNkAZhjFBDa2xByRRm0ticZGKjgUAjj2o7Z2JYKX4BoJdKtU3Dc3nXog0axn0VgzAF05INYu1hSBgRzRdb+Tu9mSF9BUs3NLLq7Z2bT5bPUUigkbupJAgkU4K5ozqtiljOJEaUR7OinJZumc0yIVuFljOSGB586fWr2TvwqEcDz5FYw4/Gtc3L562ppPYvEYWuZZB6TIrY9eTzz/CgTTXcF08VhM20HdGyMQAPKrV3fRXUU0UkSLKynupAOMjy9s1P2Iiin1UwXqkQFfvMnlWBBx+f8a6OPbN3hmlmLSkl3Y7uPPNHtOg1WTY0VvKyIm0EjHHU+9aq27i7urh5LaMqpKrlR4uTz9MUY0/U4LSCRGjByMAAUX5Y2WO+e6lc/dLOwLpu/DxijWhi1iuw1yAU9TUV7dB5GwqgGgt1cd3nxe1Txm9ulzys1sY7WT2Bn/qpGPRai7Mz2xvEEv4T61lJ7rexOc/OuLe+aIeE4NaZekdrJbEWydwV3H0rBzXce85OaqS6lLMCrMT6ZoVLP4vPmgNvrDKhQE4PlQK+uS7HmkW4B61G+GJ8NRFJ4ZJkJVTVeWBkIyOaI/eKNqNtWneLeM5JIoBfdkdRTlM+VW+4O7B+tdiEIDuHtQUBH60qsMOeBSoKcLTwSI8DvG37SMVPuK1Nh217SWO1RevPGvRLgCQe55+tZ1UBKDdVhkZRnIb+8uKK3umfagwA/pLS1+MltJj/S2f30eHavsjriiG/aIFhzHfQD/q5X615HHnZ44vapIUieYHAB8wDig9Ym7BdmdRj77TsxZH47SYOvtyKA3f2YXUZ3WF/DKv7Eyd23uM5qn2ct1S4RlujC+eS69fzUg1pdb7QalpkpNpJFMijO0v3oPH9oAj3oOey/YsRF01eExv5cgg/I0H7TaVbWd6Y45F2A8DNFdO+0YYA1GxZD5tCxXP+FuPrRVO0PZbW/BdtAH9LuEoR/jHH1oMHbwrn7sDjzonbwM6+NznyrYHsppE6iexdow3IMTiRT75rtezrRriORJMdAfCaDMxxlF5qeNSevSidzp00LfeQMF9ccVXnubLTYTcX0qwwoRljzz+VB3HGI4hKRj0zWY1q93O+0EHPPFWLvtLb6lJ/U5EdAdoKNu+lDb2OXxLNE6kclnYVWQpnLfi60aSXZZW8se5bi3uEWVl6ScnaT/dwF+OaCqSX3R+EgZBJxj40e0f7uzmhkgjImkCliecZUL8iGOSPPOecVCtFFut45t2Q0kpyfTAC/vU1WmnKjjmub28Ek0jrwGOaGy3PPOaqxYlunYEBaCahKxY5BFW5LnAyG5+FD7yR5uSc/lRVAsytnPWo5GIbIrtgd3Irh+TxQMsvNV5CSRjrUpU0gB50QowTxVhbYvjyqSzjVpAuOtGIrXb1XyzUAtbHjJroWeVyvl1o6tsCnAqMRBTjA560AB7cAZ86rvH4DkVop7Zf1RVCW3welACKY6ClRCS2O7heKVAAjwWJIK+malbaRhXY/I1Vgcp0qcujNjbn50VdiilA2jHTPiH8a7tWBY74sgfDNRocxEpIQSOKsQh40XJUj48GgnWWMzIqvsIPRCVq3cyzSw4E5Jzjxjd9aHRMTI5dCcemGFWI2t2miTCrk8gEr9KAnHYXawZaHeoGcoc596G26RIz/d92xbpyp9uOa9BXULSLQHjiuQWZMBJEDfUY/jWJaQhDvQYOfwn+dOiyiGkZgvxLBctC2Pf8xitmvaa5gSON4FmJ4Lq273HB/fXmdvLEruxJjPTzFFIprxx3ttKpVQPHO3hX4+p/KlsiyWt7N24sbGMNqETRD4Egn5A/wADVCbtV2D15f0fULmBGPO28QxEfJun1rxrtFd3j3777qSWPGA5GAx+HpQ2C36MwJrO9rcdPZr77JtA1Fxe6JqdzaSHlJIpBKg+XOR70E1H7Pe2NplrTUl1SIfqSyHc3+fn61hbOefTpN9lcTWrnktBIyZ/ykUfsvtG7V6Y4Q3yXcWeBcxBsfDIwfrVRMYtQ04lNa067sD5S92SoPzFaxbFk0W3l3o3dgLuAxlNwZfnz+8+Vcab9rStCv8ASelOoY+I28gYf5Wxx71qrLW+zWvWW1Wjijb9R1MOPl5eVIzYw002/nOCOg9ars/Hx9DW4m7Gafcp3lhdsoPqRIPpQW87HapDkwCKdB/8bYPsaqs4+Dz51A2au3VldWrFLm3ljI/aU1SbOOlBFIPDVZutWypPBx71EUG7kiqiuwOOKjHDcg1dCjzFP3Pi6ZoOLIMZNw6CtBG+6NQT0oXaWs4PgiY5+FGbLSb64OFicY+FQSROqrg5NNwxOKN2/Za+ZQXwB8TRS27KJ1mf/LQZIKCMEc1DJauT4UJz6CvQ4+z1kuPASR61chsbaLhIVHxxQeXnSbl+TE3tSr1fZGOML7U1FfLSEirEJ8WTVQVPEaAnvURgFevrU6lMAqxA9M0P3vvGRwPSu5JgVwV96AzY2iCD9KvroQQMSIxsy8jegHp8atRSxrqtraQQJPNcHbGJX8Ib4j0/OsvJ3szqxYMqDCgtjAqzGkshtn4zDwrZ565FZs2sumv1C0gS6Nvc37mPveVWPux+WK0Fv2bsruyka1kxEBjvG8ZLeg/fXn91dSzXCkeHPLhXyPrWk0XtFbW+gyaddw4uBIWSUeHep+I6EfwrExu+3TLOa6Xrbs5ZWPd3N9L3sWf/AGkbBf38qzWvSfp1yZLGMw2jHaq7cf70TlSUTpKLj8DBlDHIHn51bv7nT9GsJHnnhmldg0cCDxn8vKtZzc0xhlZdhOlaDBcxOt3IBDtO/cRxWKbbDcSRQNvVXIUgdRmtNqNwdWgdZEaKNxwE496pWFpb2sg2Md4/WIqceNjfJnMrqA12Wg2pLE6ORuAI5IqFJ0k4boeKv9pbj+sJ4tzhMZx60HhGMYFbrmLwhmhEQAJHT41pUeOG0SPxIVUDIGKzmkRmW8toI2zvcKPX5VvE7LatKY1WIEOeN3/arED7a5uLWMNbXjxN5YJH7qL2vbHW7SMGSRbgf8xQf5Grlx2LvI40FxDkMcZj8Roq/Y7ThDGqXjRy+atx++gr232gRSxKNT05wCOdh3D2NX0TszraiRI0Ut1wpjIq83ZuztoUja2gnHmSdpP8K6uF0W0EUUkEcGOjL5fmKAHd9hIXy9jeOgPQOAR70KTsRqIulSSSExk8srVp9Q7TabaSpHb6grADOCM5/MVlh29vYdTcMqTWxPQdQPnQHtP7BxK7fpku4D8O2jUfZPSo9v3WSPM1mYPtHsu+K3FrPGvkQc0Wg7W6DqkZiTU+5ZuBuOxs/nQaOGws7ZQI4IhjzIpG5soG2mWJG9M4rK3+i6hcpnTdeLIR0fxfUVl9Q7P9ooGLSxtOAPxQvuoPS59asIFJM6HH7Jqh/wCqLE5wG4ry8SXMZ2Txyxt5h1Iq5HLlaDbXnbBFXEEXPqaFTdsrwDAIHyrMyTHOM4qCUlurUBS97R31w4JuGXGehpVnJ/xYBpUGRp0OKalQSo5BySa77w/71AKfNBaE3wqzA0e0fDnihwNTRykDpQW0PjZg55+OalZ27xc4ZSeecVQSRQc7amSQMxIYjA4oDtldLDDNdXZc28GMJnh3Odq/Q+1WOxl9YGXUZdRIFzNtMOcY569f/OKzdxK0sDW+87GkWTB9QGA/6jTOiBUVkBI/W86zpdtpqts148klm0Y7o44QDf8AE4rjQNBk1ElZXRZfJHO0sPhnrWatdRe2YlWYAjBwcVp1vVu9MB/S8hFyMkZzXO55Y3t2mOOU6ZLtD2c1bT76d760dYyx7thyrfL+VA2XbjjFeh6ddXt1Z3Ud4Wmt4lzGzk4U/DNZsW8Vy+wxnknnH8qvmfh66Xfs7e2i7T2l3dqGhtw0hU+Z2kD6kH8q9O1HtloS3sRSGTK87hlcV5ZJa2umTtHBMzsyKfFxsPUj91cLdt3kjfdncMY9K6SuNmrp6Bqnb95LmI6azbU/VlG7NDtV7aarfsqGBFVRklR/OsVJfOZNxAyBjj0qH9Lk7wv3jcjGM+VVGoutb1GR1U3Uke1c43Hmqkl1K8pL6gTgZHOefSs891JnlifSou9NAUklQ3Cs/jB/ERTC5thJKVRv7JJ6ULjfBOSeadSWBPnQEJr7fbrGqp4eN2OTVF3GMY+dREsvBrjJoL1nqF1ZsGtLuaAjpscj6VprD7RNdtNokmjulHlMvPuKxeaWcdKD1W1+0qwuyF1bS8Z6shDD2PNEIZuxusc290tvIfIsY/p0rxsOR0qVJRwGGPlQeuXfYtpIy+nX6Sjy3DI9xQW67Oatar97atIo/WiO6snY6rc2rL+jXc8RHTDkCj9h9oGt22e9kiulXgd6OfegF3wa2l2yoyE+TDFPWsT7RdPkjX+k9JDSDptww+tKg8mpUvjzikeOtB1SFL6fOkKB66B4rmnFA4OKlibGeOtRU4OKCbIZsdKdjlxjyqJD4s0gcsaCRmPTipba8e2yq8o34lPnVYnmmJpZsl13Hq14dLXstEttHiOVBhghXJPnmgGj6K6RzX4niNpApZi+Mr/OgWk9p7uwsf6PdRPZ5LBCcMpPXBqzrfa6TUNLGm21jBbQNjvG4Z3x5ZwOKz4xqZ5QGubx57uaaQAmVixqHvODxUPOKWa1r0z/AF2GxSLmuKVAicmlmnxSxQMTx0rSdlNFXVnMUmT/AHetZzyqzZ31zYyd5aytG3woL3afTY9Kv2tonZgp/WBH76D1Yvr2e+mM1y5dz1PrVegVNT01AxpBiDxSNNQdiZ1OeDn1pxMQuCPniojTUErzuzZJpVFSoPepOyHZq7k2yaDYof2oIzEf9BFVLr7JuzcsXe276hat/wAq53D/AFhqalQeWdrNEt9CcLayzSAn/ilf/qBQQdaVKg7pL0p6VA9NT0qB1pL+I0qVAj1pjSpUDCnPWlSoFSpUqBUhT0qBUqVKgVI0qVA1KlSoFTGnpUHJpjT0qBqY0qVA1KlSoP/Z" alt="" />
        <span>Big Whale</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default NavBar