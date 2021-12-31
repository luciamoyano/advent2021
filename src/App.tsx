import {useEffect, useState} from 'react';
import GiftsList from "./components/GiftsList";
import AddGift from "./components/AddGift";
import "./styles.scss";
import Button from './components/Button';
import { useLocalStorage } from './hooks/localStorage';

export default function App() {
const [giftsList, setGiftsList] = useState([
  {'name':'rings','quantity':2,'recipient':'Anne','price':'0','image':'https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-tt1-ring-67796659_1013904_ED_M-67796659_1013904_ED_M.jpg?hei=342&wid=342'},
  {'name':'milanesas con puré','quantity':365,'recipient':'Todo el mundo','price':'0','image':'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGBgaHBocHBwaHBgZHB4aHBgaGRocGRwcIS4lHh4rHxoYJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHzYrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAD4QAAEDAgQEAwcDAwIFBQEAAAEAAhEDIQQSMUEFUWFxIoGRMqGxwdHh8AYTQhRS8SOCQ2JyorIVksLS4gf/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQACAgIDAAICAwEAAAAAAAAAAQIRITEDEkFRYQSREyJxFP/aAAwDAQACEQMRAD8A8/8A6k5jk35n5I+jiapblLyGn+LbT3WYa6DYoyji3t39bqGn4zSMo+o09JsCTdRuog3CgwGNDm+Kx57KwpszezftdYyi0dEZp6B2iNQntCuMNwZ7vaAaP+b6Kxofp9gu4l3TQfVJQkwlyRRl34VrtQPRCv8A0uX3YxwPQGPevRKWEYz2GNHlJ9Spw0rSMGvTKXLF+HmdL9C4gm5Y0dSSfQBWWH//AJ+P51j/ALG/MlbwMSDFrbMbRlKP6Hww1zv7uj/xCOp/pbCN/wCCD/1Fx+JV+KaQbeI80WwKbDcMwxkMpU/CYPhFj5otuApjSnTH+xv0R4pAbLuRA7A20WjRrR2AXf2xyHoEVlSypUFg37Y5D0Cnw1dzPYJb/wBNk7KuZUwsnfxOq4EOeSDrMfRCl/QJ+VcyKWrAiEdfVC18O93svju2fmjixcyIpBZn6/CaziPG0tGwkE/JR0DWYYfRdl2Ih488twtIWLkIoqMqZRVAT/AdtFWYqm5l4IHPktjmO9+4lQ16DHghzYnl9Cg1jzJPRkG0v3BBdPoqXH8Ce27bhaXE/pp4M0ntPIO8J9dFBVqYhnhewjrEg+YshP5NX1eYtNfBjqlF+hag34Zw2WoxlF5uG+5VT834EWTLjvKKgNcnFqNq4V5vCCexwsU7MZRoYkuZCkmRTOZVacK4PVrHwMJG7tGju42W24T+jaVOHVf9R/LRg8t/NahlMAAAAAaAWA8ggky/CP0k1g/1X5if4tsPXUrR4XCMYIYwNHQX9dUU1ic1iAsYGJwYpGtXXIERFukCb+nVSBqgxeKZRYXPd2BIk9GhUT/1SQ67AGaxMujnIsEnJIpRctGnDFw6SBPZDcN4pTrCWOuNQbEeSOCYqoYAu5U4uHNBY3FRlDTEm/aDYctlE+SMVbGk2EugKNtdkgAgkgkRcWMG/RVj2ueX+I3aWi9oO8DQ/RTYShkLWADIG2Nva00I3E3XJ/0OTpYK60WBe03kD8hD/wBbTmMw0nfnASxuCD6RYDG9yY19VzB8OgMLS0tyxp5gz2VvmlFJJWJRthgppzaZOymeyG6/fsuU6mpAvHZafz+UHUaMMUTh+GZ9Xtag31HRLRmvzi3S3xRFGsTDpkdDy2J5o/n+g6hDuAPjwuaUJieGvYJcLc5m6NbxGEHjcQ6q0guIN8pBsDsYTfNFrAurBXUyNQmZFY4GJ/1XZjl8RjUjcckm4PM6Gb6TZXGcX6FNFYaaYWK4PB6v9vvCGr4NzfaYR5K6FZWuYuAkIpzFGWICwOphmO9pkdW292io8f8ApfOS5jg7oPC70OvktK5iiLUFx5JRdoxLcMaZLSyOYIM+9MxFGm8bT01W0xNNr25XtDx1kEdnC4Wbx/6ZIObDvn/keYd/tdo7sYSRr3jLeGZipw8SYn0SVv8A6gsWOBGstd9EkUiv1+zfNanAJlWq1gzPMDqq6px1keFpJ2mwSlOMds54wlLSLcBJz2jUgeYWWxPFHv3gchKH/qC47kgLCX5CWkbR/GfrLvH8aDHAMAcNXEzHl1UTv1GIsy/U2VFXeCOU80E/FNFj6rJ88no3j+PH1BXFsU+o5rnGYHl5DZUhL3PgXnnpClqtLneEnLz+KMDLCCTt9yjvSK6U6RNgXupwWCHDe61WG4qHwHuyuPOw+yxbWPzTJtyRVWiwiXOcD33RHmawyZ8CejdF+QwDKGxfCWVdXEXnYgHoszgMf+3Yvc4bZtQOXZX2G4wwEGTHPbzUuVu2ZS4WvCxocNyCM09babT5IRtYsc8uu0ZGiPFc2NttQicRXeWE0cpNom41vp5qGu8ueDtBkDna/wAfVZypaISeg7+qgDkVPh8WDY27IWnQY+MxPkiG4Jg0J6clKU+1p4HgWIxLGuDXvgmC3UAnlOnkn1amX2WyIuZHI7ctFU43g7nva5z/AGSYMiLkQI3+6LrMc3U8vyFo5OtEpNsZRxJCKa9sQLXkxudSqlzDNk+nUWC5JaaNXEtQGkfdRB/jyxAIsdpGygpuK656tS+iXEPoiXeIx+dE5tcN9knVC0K9oRDy0NggOMW99lpF2sEv7LDD42rM5iehurnBYvOIdAduOfZYvClo8DHPJDiHGoTrN4tp2spn4l9N2YkZAJtOYGVtDla2RKKZrMTwym/+MHm232VPiuBObdniHoVPguLOMAwZiOsq4o4gOsfC7+06/wCF1xkpK0ZtUYmrRLTBBB5FQOat7icK14hzQfiOxWfx3A3NuzxDlv8AdVQjOvYoXtRr2QoHtQANnP8AcfVJOypJ5FRnuL8RFRxIu1tm/MqpqYh/QDn9E94gW16BPLAWwbdDfovLcrds9eEVGNIY3EO/uT3VspmQe1kz9kA2t1CHNN0kTbtfyUVZRN/VToAhHiTcWlSvoOFxMczqpmUp9o22+6rEQTIWPDbN39yIpnfdcewR4dpKgFa9h/hJ5KDwfvKDr1hJbrv2SxGKjQXOygbSey8jnPMmNElEEyVrC74gbmOyma8kjKMpNjJMfZC087riSRcnkiKTjqRPr6qhoPwPEX04ANpiDuVc4fiIeYHtASR9Fmz49g0Qbifmp8MW0znnMYDT9lLqqMeTjvK2a+jWKLpVis9R4yNwCOh+StcPig8S3Tf6Iiq0znlCS2izdVEaX279ULUqF0ZtfXyUWZczKm7WSKIq7y2LEza3z6JGNVMX2hNAChxXhSY1tVPD51TX0xso8pRkNhb6rWtJvblf3JuGrZhLgWmTvNgYB031VRxZlYscabZPMG4IM6LP4DjD2vh2bI0ZQIdzEydyFdPdGcmkzaVHkGeRnzCkZii8zoDIylt/DqeUIbDPDyATrfr5Il9J4mYgaGbweiSurQOgtjXsc0iSCIiBbkeaKw9Rzan70hzgMozXOX+0ToJ2CyWG4lW/fyZXBjZFxmzcjnPkrrDV8xf4uUXsI1EALSMqJ2b7B1s7WutJF4MweSnhYrCYx9JwIMg+h7havA41tVsix3G4+y74ytGTVMh4hwxlQTEO5j581lMfgH0z4hbYjRbxD4iiCCCJB1CtCPO8qS01TgTCTBI8wuJ0TZ5Oxs6XPRNDGuvrGsa+ijo4gXBbJPlaEhUg+ED4nrovHye3QSYiCI7a2XC2RIg8vuq9+N35bj8+KnpYwnQEDqEUwolqYg5YPp2UDSZ2jeeine8OBvPlCCfQdILQTGuiaoCWmyTfX8+qVahERJPQIqhEWOinZAEnSdu2iTlnANFVTwu7pBIi4/N11zTvA5EoutfxCTfe/okdudkOQIGeTl0LufKdvgml7x7MT02HL4ouowltna9NUOW5SBIg6RNz1QikwjDtcILiJgmAPj1XahcRmLAW3np2HNMyXiTzJiynflgZgCBy1SxsTbK2qHmzGw2fy5Vnw6q+nAnuCfyVE97QY0m43UT8TBg+2OXyO6eXoH8SNVh+MMLRnIaTaCbz8kW14OhWDdii11z8/Kf8rQcJxjnNgmSO1h5KndZOScEsovmrrhF5Q8nXW3ku1HHl6IapGRKKnNIPmbR57LjITnBGQGirlsuNpMc4BzQSb94IN/zZQVSicO6L9ElLNA1gEdgyysHsZmIaWwTAudreHnYFW1cAzFoTGAu7lS1KOUXNzoQZCtfWiaSKp8A3MSYXWPDLm0nVVnGw9zHAN9ky29559Nt0F+kuIOJcx8yCDLuekX3tKjqqbTE5O6o3WHphzAQdQCOxT6D303Zm2jlp/hDfvxIBnronCtNjounj5K/qTKN5Npw7GtqtkajUcj9ES5w0WJwOLdTeHDzHMclZcVxDvC9rvA67TuDuF2IyZoDTSWSbxiqP5H0SVUI8lotLrk26oylh52+5VKyq8AMaRY3Bj4o/hz3k3IjlM3Xlzg1mz1o8l4osXUBEc9vsmNpN2F0UGkjQd/ooiHB1iDteR6wskUmMa09S3poJTf2o0kzzunUsxIk5eY/yiMRTjmALg/KyKKbYCKQMQYJN9vtCkaxoke13ErrWjfT3pjSAbD1Nwk8jJXuMQIE7R56JAZf8fFODwYEiRz6ofFPc0Gw3/IS2NEpIvaRsYj8uosQ1kdAQY/LoDDuebA2m/LqjKlEuAmG9jr2HKVaVbDAz+qi0fROOm87HTyT/ANlrQQId5AXj4pjXmbty27nrpoihKVjMj9zlHX5eSIw9GRncBJtOpjS/p71MII389dOqd+yALTfUetyiwbvYqmFa6BLTO30TcJTFJxv5/ZcNOLCx+AUjGS0yC6N7e5K2iJRTQdU4lAXcNxI6Oi+kH6qnqh21xyIuBsYUlN02Jm2pt8eSvszJ8So0tKp1T6mKygmC6xsNVmf6kga25ymni4YbHP8ABUk/DHozRYPFZ25y0sP9rtVa0XtcL3MQqDB4oPZNh+bKWlji1wEKU6JcXou8S3LoCBHdV2MxpaNC4yLDW5AJ8kSzESNVncfVAeS8iGkwRNgTpA6JvGibLN9APaQdyDboZhR0OFhj3vguzGzRDbeokqu4fiKrnmSWNBJbYRF4zHktJTrZm2CSWCbUh7GANaBNhvqiuG8PfULnAWYJ7n+0dUOxrf5T5LU/pR3+m9vJ095A+i34o9pZFJ0jP1Go3hlUPa6k7e7ejh9VNxrDZXmNHXHz96pmvLXAjUGV21TMmGOwJ2ISVo7Bmp422DoPuv75SVk2eFYlrmOdAgG09F2hWcTkaY3nl2Wibhg8Qd1UY7Bim8N5ix6LknBJHbCdssKeIdl1+Cd+849O/wAlX4MQDfsOXVTMeSZ2+a45RSwdUW27C3vOsXmLwo6j3HU25byonOBPtc/Qc+Se5s8unX5wopem1YHDKGnX8K5+3e5BBiB8UxwOwE9E1odsCB1I7IVhXyE0qbZgmOwT34VkkAZo5++YPfbZRtrt0vIN7dNZ+S4cQNN/PyU6YU2Stogjwaaac0ymBvbrHxRNJ3Mkcr7qKvhXGZIvobyn/pPoxx2lsc9lGKIOo8R0NvOQutZqDcibz+SpHNBjoRt5IsdIgZReHHTXYj3IymAB4tPmo88Ej01Q7wZ8RJafL39krzY6sLa8GcosLbEnnvCQY7mOekfCyF/cjkBPXsi2PETcjT+33wVV2RJUClhN5/OSjqEtvIPTf/KNyTfQQgsVSda0zAIEnzkJpiAKtc7Dfmo8oJ/PgrJuFyAWsdrTO4mVX41jmkuDYbrBOg6Sto1pGcnZNh3gGJnpp6o2nxi5a8coIEkdD0VDTriVY4Chne1oIBOpibKuqWyJO1kvHV35C5txzHwKztUPqDM3MfF4gPDMXvPUlehYDCANaxsuiwtJPkETT4SzMGU2E63dYudqZnSNFrHhrJxSlbrwzPCcG2n4i5xJ2JmJ28uat21CrpvA6g/4XwRY/T9QaBnr9kPgb9BSSKChUc9zWNaZLgJPUxZbnBU2U6uRohuWO51v1QOA4CWuzVCIGgaTr1MJ/EahbUzDULXj4+opSsP41QzMkaj6fYLH1Qts5+dgcNDlP/cFjK4uVsQGYTiRawNnSfiUlVykgVGfwzEuKYPOy0Bzbie1wiHsyuU4aHCDoVnJWqNYyppmDY43LTrr80XTrAQfd81PxvhxpkP/AIk+UxN0Lg6wOrQXA+R2Flx8kT0OGaCRVBOkdN1LTPL1KjJBMmx5fRSCjbMDPTSFzs3TOOrRA9/RSPqeGbEA+dlBWqaD4JrXnYX6n8siqBOx9Sq1w8IBJ3SZh3WJLY9fKPem0aQJu7/2jvYLuaDa82m1uyT+il8FnSphu7fzqU91b09PwKupucLH8snOxGnz2UUxOIU4SZABnoB+bKI5r9NZEIWrUcdDGvXVKk91pdbTX0snQUTZReRO9576KN9YEXAjbb3cl2q0l7SHW3F4I8t1yGzoDO9vn8eirqKyXDvEX+A36InOMthIQtR7AIIJNog+4iLpuHxWx7COXVLrmyW7JHPO1/f02U2eG3A6FQVb2FiP7QhqbnOtmnnO3WVSSDYZVeDBA16xtyHndMZXBDgSAD4SOh2JXHxGuml7+/ZVld+V1xrCqMbJwWge0NyeHLyyt12M6nVFcMpUy8Nc4sEwSIMTYHa0qlwwLhd2Xy28kSzwOsTHNbwdMymk1R7HwbhdJjZY7ObjNII5ECLK3a0DQCy8o/T/AB6rSeA2Sxzhmabg7GJ0MbjovWV2xaZwTi4sSSUJQrIEVnOJPl5WheYBWXruzOPUpAXuDEUWf7fe8LJYg3JWsxjslIDkI9G//aFkqqABklJlPJJArA8dh7yhqRVziachU9RkFQWjuJw7XsLHCQVlcTwkYdznAy1wgTqDPv8AutY1yE4zQz0XjkJ9DJ90rPkjcWa8Uusl8GbpEWncqR0Rcx6Qg3OdtEBROq89J2K4HHJ6SCG1jGhI5+652XWU3OMb8t7IUPMWiLev0RNOqYsADzvMH/KdUF/AnTPfrHkiGsHh0sbjaYgprW84UzYItHlz09Fmx9sD3PMnt5d0O43IcYF9L6dEqlVzSWtMi45hCB7s0gxIgjtrEpxRV4JshiZTKlZxNjP5umOf/GdZXHETAiwuRoqUbDsHDE32nnYe5CVK0PIFideR5Jpqc4+KjLJdcQetkKNE2TseTqDb0jaOSljNoALwTcR296dSptbcuBAG5i/L7IqiGEA6drWQ2iXgEyEWzW6fmia12U3sNeSOe9rSNDtquV6uxAPK41HKe6MEpyBnukRcTF4MdpUzMO10ZojTkpGYg6FojUD/AAoX4g5pIgctk7dYFVvIW3CNiIPeeWii/ZJsDpzXf6u4g35/c+inwYaXNt/IafNaQbIkaX9C8HJf+7VghhhjY1d/dfYT69l6K1Y7glUtMD0H0Wso1AQu+EaRwTbk7CAkuNTpVEIC4pVysPM2Cq+FYbM/MdG+87fVEYljqr4FmjfYfdF1mMpsBgeEy2f7oIn4oAr+PYi+Uba99T/8fRZ96JxFTMSSdU/h+HD3+L2R4ndh9UgZbYPDUgxofGaJPnce4hJC18QwuJcwk/kDyFvJJVQsFaVUY+mRcaK1TalMOEFSyihpPRFiIO+qHxeHLDOy7SqSpGZbjGFLHmMpkXDQQBOwE8oPmq17wXEea1XGsI95DmCbQRvaVTs4U91snmuOUX2eDvhyLqm2V5eNQLevqpWDfnyT8Rwx7bFhibqGm5wkFpA2lTKDLXLF+hTpOlioqdYtPbRcOJAbfVCPr5id9Okd1Cg2X3SwHVMWIk6zJ1v97oAYwkwBA+vJTtwmYAFSU8OA02081UVFbIcn4TtIeJdc27jYBSUWtiIuhXEsEtiPL83XKWJBdrBPeFLT8KTLGo4EXAkXFgboOpii4ZYty5FMZUzEtNtLqZtLLIdMHT6qUq2VaGUWZQQYIOszHl1U37RiQ4NHIm/rEEJjcA95tp1M+gTv6eQRckWmIHY9EYC1RKzKIN436qJzGhxNx9PkuPflaA/W1/4jrKGrVmz4TmiDOgjfXrCqmSnTLKnUgZR01PVNc1t4B9boNmJv+c1K2oCZmAfzZFMHklaA2ZXMFUc5+VkGeVo+SBxD83hGpNtu/uU1J7meEC+5m5G/bRaxVkWkekcKIyNggkAAwZvC0OArwYleX8F4g9j25ZM+0BuJuF6HRzESGk9dh32XVxTtHHzcfSW9moZWbpInWO6eYI6KkwQc6JNlbaCSYaNSVqYDrQdmi5Wc4pjc7reyLAfNS8T4jm8LbMH/AHdT0VU4oAbEmArunQDG5IkgZ3n/AMWfnXmh8NS/aaHuEvPsN5f8x/Pii203Npm8udcnnP4EICiqOkkrqM/9PJ3XU7JK5OCYE4JFDatIOEEKnxOBLDLdFeApETqpaHZn2PUzXI3E4AG7UC6i5qRVnXMBQ78Aw/xCnBKeHJCspcfwJj9BBWV4jw99N0GYO+xXo0IfE4ZrxDhIScE9Fxm1gw2BxQb7Qnz965WxIeSS6B7+l0fxrgJYC+mSebdfRZ57yZmB5eSwfGrOiPJaLDOw6k26e5Q16rZlthHcSoKJ2Hn2SrMtbcfkoUEh92yejULXTMk6/borTDVBEuPlOx/Cs/hql4cegKKa+JgyonCyozLtmJtlnwybC3XXtsoS8gug6AWnYWgeSr2VbWJF589wVMK0WiZ9RyE91m4Vg0v0GxOKzOgab7qOq8BojXlaf8SmUKDjMagkm91YU+D1C0vAPbpqY810KKWEYuebZBS0lS06oM9DpzTW4RwzSHdryp6WFcB4mn035qJRxhFKavLOVg1wIiOV79/VEUgckHeAeem6ip4V07zzIWi4Vw3MWyTtYDU7e9LpJ6G5xWWwz9N4R1M53XtAFtOdxyW24cz9zbTexj1sPIKvwPDA323QB/EXd/8AnzVo/iORuWm0MHPU/nquuEeqo4pyc3ZZvcykJcddAPaMKmx2Pc/WzRo35nmULUqEmSSSdzcrlGi55hok/mquyCMmdFZ4fCtpN/cqC/8AFnXr1+Cc39uhc+N/SIb9Pj2VXi8U57szvIbAcgnXyAQzEl7y5959w5BWz8SAL/gWZD4Xa2JcUf6IvP8A1JnNJZv9ty4qtE0Tgp4Kia5OBUlEwTgomuTw5AD5TXMB1XZSSoAWphEG+gQraVxzAdkqCymghIuVo/DAqF+FSoZXuEqnxvBWv9m3SBCv34U7FIYUpNWNSa0ZnD/p1rTJum4r9PtIOXfnqOxWmdRcE0sPJLqh92ZB36bJMkzOqLqfpthbAsfmtEQmlyaigcmzFD9NvB9qeuk+inw/AHzE5RfTrrda0BE0MPKXVD7yRQ4bgDABa43VwzD5RACsmYcBSCmOSpRSJcmyofQB1ATTSHIK7Y4t9mAeYAn1iULUw8kkm5RQWVf7LeQR+ELWrhwZOhRNHhxFzbvZAgz9+eg5Cw9Ak0EmACT0SY1g69Bb3pz8UYhsNHTU9zqVVASmg1o8br/2tgu/3HRvxUT8U6Iaco5Nt6nU+aHJTS5MR0lJrCTAUZKO4c2XBAWTUODuMZjHxRjOEsGt0eHwEx700hWRZWi0BJNlJOkSZZqeEklJSHNTwkkgY8LqSSAEupJJAdCRSSSAjqKILqSAOJrlxJAyGohKySSTAfhlZU0kkITJQmlJJMDiTEkkDLI2pAix5ix9UCV1JPwBgSSSQJjCmFdSTAarLhq6kgTLjZRuSSVIkgXEklZJ/9k='}
])
const [getLocalStorage, setLocalStorage] = useLocalStorage();  
const [isOpen, setIsOpen] = useState(false)



useEffect(()=>{
  setLocalStorage(giftsList)
},[giftsList]);


  function addGift(giftValues:any) {
    let isRepeated = false;
    //map list, if gift is repeated add the new quantity to the previous one. close modal window
    giftsList.map((gift, key)=>{
      if (giftValues.name == gift.name) {
        isRepeated = true;
        let newList = [...giftsList];
        newList[key] = {...newList[key],'quantity':+gift.quantity + +giftValues.quantity};
        setGiftsList(newList)
        toggleModal("close");
      }
    })
    //if gift isn't repeated, add it and close modal window
    if(!isRepeated) {
      setGiftsList(
        [giftValues, ...giftsList
      ]);
      toggleModal("close");
    }
  }

  function deleteGift(deletedGiftName:any) {
    const newList = giftsList.filter((gift) => {
      return deletedGiftName !== gift.name
    })
    setGiftsList(newList);  
  }

  function deleteAll() {
    setGiftsList([]);
  }
  
  function toggleModal(button:any) {
    button === "open" ? setIsOpen(true) :
    setIsOpen(false);
  }

  return (
    <div className="App">
      <header>
        <h1>It's gift time!</h1>
        <div className='description'>
        Tell Santa what you want this Christmas. Add, delete or edit your gift list and enjoy the most holly time of the year</div>
        <Button id="delete-all" onClick={() => deleteAll()}type="reset" text="Delete all"/>
        <Button
        id="add-gift"
        onClick={()=>toggleModal("open")}
        type="submit"
        text="Add"
      />
      <div className="custom-shape-divider-bottom-1640912836">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
      </header>
      <main id="main-container">
        <AddGift addGift={addGift} toggleModal={toggleModal} isOpen={isOpen}/>
        <div className="gifts-container">
          {giftsList.length !== 0 ? 
            <GiftsList giftsList={giftsList} deleteGift={deleteGift}  />
            : <p>Add a gift to the list</p>
          }
        </div>
      </main>
    </div>
  );
}
