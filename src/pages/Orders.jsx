import { useState } from "react";
import { PageWrapper, Order, Empty, LoadingComponent } from "../components";
import styled from "styled-components";
import {
  CaretRightOutlined,
  CaretUpOutlined,
  PlusCircleFilled
} from "@ant-design/icons";
import { device } from "../constants";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../api/orders";
import { useQuery } from "react-query";
import { useUserContext } from "../context/UserContext";

export default function Orders() {
  const { user } = useUserContext();
  // const date = new Date();
  // var currentDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  const { data: orders, loading } = useQuery(
    ["orders"],
    () => (user ? getOrders(user?._id) : null),
    {
      onError: (err) => console.log(err),
      retry: 3
    }
  );

  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const filtered = (status) => {
    if (orders?.data) {
      if (status && orders?.data) {
        return orders?.data?.filter((order) => {
          return order.status.toLowerCase() === status.toLowerCase();
        });
      } else if (orders?.data) {
        return orders?.data;
      } else {
        return null;
      }
    }
  };

  if (loading)
    <PageWrapper>
      <LoadingComponent />
    </PageWrapper>;
  return (
    <PageWrapper>
      <H3>Orders</H3>
      <div className="hey">
        {orders?.data?.length && (
          <Filter>
            <FilterButton>
              Filter
              {show ? (
                <CaretRightOutlined onClick={() => setShow(false)} />
              ) : (
                <CaretUpOutlined onClick={() => setShow(true)} />
              )}
            </FilterButton>
            {show && (
              <Filters>
                <Option
                  query={query}
                  id="in progress"
                  onClick={() =>
                    query === "in progress"
                      ? setQuery(null)
                      : setQuery("in progress")
                  }
                >
                  {" "}
                  in progress
                </Option>
                <Option
                  query={query}
                  id="completed"
                  onClick={() =>
                    query === "completed"
                      ? setQuery(null)
                      : setQuery("completed")
                  }
                >
                  completed{" "}
                </Option>
                <Option
                  query={query}
                  id="not started"
                  onClick={() =>
                    query === "not started"
                      ? setQuery(null)
                      : setQuery("not started")
                  }
                >
                  not started
                </Option>
              </Filters>
            )}
          </Filter>
        )}
      </div>

      {loading ? (
        <LoadingComponent />
      ) : orders?.data?.length ? (
        <Wrapper>
          <Fields>
            <p>Order#</p>
            <p>name</p>
            <p>Email</p>
            <p>bill</p>
            <p>payment made</p>
            <p>due date</p>
            <p>status</p>
          </Fields>
          {filtered(query)?.map((order, key) => (
            <Order order={order} id={key} />
          ))}
        </Wrapper>
      ) : (
        <Empty />
      )}

      <Badge onClick={() => navigate("/app/orders/add")}>
        <PlusCircleFilled />
      </Badge>
    </PageWrapper>
  );
}

const Filter = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 520px) {
    flex-direction: column;
    gap: 0;
  }
`;

const H3 = styled.h3`
  margin-bottom: 1.5em;
`;

const Wrapper = styled.ul`
  padding: 20px;
  box-shadow: 2px 4px 8px 1px #eeeeee;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-x: scroll;
  cursor: pointer;
`;

const Fields = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px;

  p {
    color: ${(props) => props.theme.primaryColor};
    font-weight: 600;
    font-size: 13px;
    text-transform: capitalize;
    min-width: 150px;
    max-width: 150px;
    margin-right: 1em;

    @media (max-width: 520px) {
      font-size: 12px;
      min-width: 100px;
      max-width: 100px;
    }
  }
`;

const FilterButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0px 20px;
  border-radius: 10px;
  background: ${(props) => props.theme.secondaryColor};
  color: white;
  font-weight: 600;
  font-size: 1.3em;
  height: 45px;
  max-width: 110px;
  border: none;
  outline: none;
  margin-bottom: 1em;
`;

const Filters = styled.div`
  display: flex;
`;

const Option = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0px 20px;
  border: none;
  outline: none;
  border-radius: 16px;
  color: white;
  font-weight: 600;
  font-size: 1em;
  height: 30px;
  margin: 1em 1em 1em 0em;
  text-transform: capitalize;
  background: ${(props) =>
    props.query === props.id
      ? props.theme.secondaryColor
      : props.theme.primaryColor};

  @media ${device.mobileM} {
    padding: 0px 15px;
    font-size: 9px;
    height: 34px;
  }
`;

const Badge = styled.span`
  position: absolute;
  bottom: 30px;
  right: 20px;
  cursor: pointer;

  svg {
    width: 65px;
    height: 65px;
    fill: ${(props) => props.theme.primaryColor};

    @media (max-width: 520px) {
      width: 50px;
      height: 50px;
    }
  }
`;
